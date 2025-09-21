/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export", // tells Next.js to make static HTML in /out
  images: { unoptimized: true }, // forces <Image> to copy files directly (no special loader)
  trailingSlash: true, // ensures /page/ → page/index.html works on Apache
};

// next.config.mjs
const base = process.env.NEXT_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const config = {
  output: "export",            // تصدير ثابت
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: base,              // مهم لـ http://IP/~cpaneluser
  assetPrefix: base,
};

export default config;
