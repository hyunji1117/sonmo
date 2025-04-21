/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image6.coupangcdn.com'],
  },
  experimental: {
    turbo: {
      rules: {
        // Markdown 관련 규칙 추가
        markdown: {
          loader: '@mdx-js/loader',
          options: {
            // MDX 옵션
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      },
    },
  },
}

module.exports = nextConfig 