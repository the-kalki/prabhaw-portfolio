import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import type { Metadata, Viewport } from "next";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300 cursor-none">
        <CustomCursor />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}