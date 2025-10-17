/**
 * @format
 * @type {import('next').NextConfig}
 */

const base = process.env.NEXT_BASE_PATH || "";

export default {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(base ? { basePath: base, assetPrefix: base } : {}),
};
