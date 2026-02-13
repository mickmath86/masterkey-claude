import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MasterKey | The Future of Real Estate",
  description:
    "MasterKey combines cutting-edge AI technology with expert real estate knowledge to deliver comprehensive brokerage and property management solutions.",
  keywords: [
    "real estate",
    "AI",
    "property management",
    "brokerage",
    "MasterKey",
    "smart home",
    "investment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
