import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://rayvishal.dev"),
  title: {
    default: "Vishal Ray | Full-Stack Software Developer",
    template: "%s | Vishal Ray",
  },
  description:
    "Vishal Ray is a full-stack software developer focused on backend engineering, system design, and building practical web applications from idea to deployment.",
  openGraph: {
    title: "Vishal Ray | Full-Stack Software Developer",
    description:
      "Building practical web applications with a focus on backend engineering, thoughtful architecture, and production delivery.",
    url: "https://rayvishal.dev",
    siteName: "Vishal Ray — Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
