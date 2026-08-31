import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telecom Store",
  description: "Buy internet, call and SMS packages",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body className="min-h-full flex flex-col bg-bg1 font-main font-noraml text-white">{children}</body>
    </html>
  );
}
