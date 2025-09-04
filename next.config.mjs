/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export", // tells Next.js to make static HTML in /out
  images: { unoptimized: true }, // forces <Image> to copy files directly (no special loader)
  trailingSlash: true, // ensures /page/ → page/index.html works on Apache
};

export default nextConfig;
