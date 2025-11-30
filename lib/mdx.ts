import fs from 'fs/promises';
import React from 'react';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Pluggable } from 'unified';

export type WritingMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
};

export type TocItem = { id: string; text: string; level: number };

const CONTENT_PATH = path.join(process.cwd(), 'content', 'writing');

export async function getWritingSlugs() {
  const files = await fs.readdir(CONTENT_PATH);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getWritingBySlug(slug: string): Promise<{ meta: WritingMeta; content: React.ReactElement; toc: TocItem[] }> {
  const fullPath = path.join(CONTENT_PATH, `${slug}.mdx`);
  const source = await fs.readFile(fullPath, 'utf-8');

  const remarkPlugins: Pluggable[] = [remarkGfm as Pluggable, remarkMdxFrontmatter as Pluggable];
  const rehypePlugins: Pluggable[] = [rehypeSlug as Pluggable, [rehypeAutolinkHeadings as Pluggable, { behavior: 'wrap' }]];

  const { content, frontmatter } = await compileMDX<{ title: string; description: string; date: string; tags: string[]; cover: string }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins,
        rehypePlugins,
      },
    },
  });

  const toc = source
    .split('\n')
    .filter((line) => line.startsWith('##'))
    .map((line) => {
      const level = line.startsWith('###') ? 3 : 2;
      const text = line.replace(/^###?\\s*/, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\\s-]/g, '')
        .replace(/\\s+/g, '-');
      return { id, text, level };
    });

  return {
    meta: {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags,
      cover: frontmatter.cover,
    },
    content,
    toc,
  };
}

export async function getAllWritingMeta(): Promise<WritingMeta[]> {
  const slugs = await getWritingSlugs();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const file = await fs.readFile(path.join(CONTENT_PATH, `${slug}.mdx`), 'utf-8');
      const { data } = matter(file);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: data.tags as string[],
        cover: (data.cover as string) || '/images/og.jpg',
      } satisfies WritingMeta;
    })
  );

  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
