import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIKRANT SHARMA | Digital Marketing Executive",
  description:
    "Results-driven Digital Marketing professional specializing in scaling ROI through SEO and strategic PPC campaigns.",
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
