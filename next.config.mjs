import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
