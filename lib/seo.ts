import type { Metadata } from 'next';

const siteUrl = 'https://juliev.com';
const title = 'Julie Vaughn — Humane AI for health';
const description =
  "Where machine learning meets meaning. AI for rare disease, women's health, longevity, and community.";

export const baseMetadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
