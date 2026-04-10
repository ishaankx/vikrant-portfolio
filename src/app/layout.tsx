import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIKRANT SHARMA | Digital Marketing Executive",
  description:
    "Results-driven Digital Marketing professional specializing in scaling ROI through SEO and strategic PPC campaigns.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#FAF7F2", minHeight: "100vh", overflowX: "hidden" }}>{children}</body>
    </html>
  );
}
