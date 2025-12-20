import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prabhaw | DevOps Engineer & Frontend Architect",
  description: "Crafting immersive digital experiences with focus on performance, accessibility, and modern aesthetics. Explore my portfolio of full-stack projects and cloud-native architectures.",
  keywords: ["Frontend Architect", "DevOps Engineer", "React", "Next.js", "TypeScript", "AWS", "Kubernetes", "Web Development", "Portfolio"],
  authors: [{ name: "Prabhaw Kumar" }],
  openGraph: {
    title: "Prabhaw | DevOps Engineer & Frontend Architect",
    description: "DevOps Engineer & Frontend Architect specializing in building scalable web applications and automated infrastructure.",
    url: "https://prabhaw.vercel.app", // Using placeholder, assuming future deployment domain
    siteName: "Prabhaw's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhaw | DevOps Engineer & Frontend Architect",
    description: "DevOps Engineer & Frontend Architect. Building the future of web.",
    creator: "@prabhaw", // Placeholder handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        <SmoothScroll />
        <Navbar />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}