import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Lasky | Cloud Solutions Architect",
  description:
    "Cloud Solutions Architect specializing in AWS, Terraform, and serverless infrastructure. AWS Certified Solutions Architect Associate. Google Cloud Professional Cloud Architect.",
  keywords: [
    "Cloud Architect",
    "AWS",
    "Terraform",
    "Serverless",
    "Infrastructure as Code",
    "Next.js",
    "DevOps",
    "Google Cloud",
  ],
  authors: [{ name: "Brian Lasky" }],
  openGraph: {
    title: "Brian Lasky | Cloud Solutions Architect",
    description:
      "AWS and Google Cloud expertise. Infrastructure as code. Serverless solutions.",
    url: "https://brian-lasky.com",
    siteName: "Brian Lasky",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Brian Lasky | Cloud Solutions Architect",
    description:
      "AWS and Google Cloud expertise. Infrastructure as code. Serverless solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
