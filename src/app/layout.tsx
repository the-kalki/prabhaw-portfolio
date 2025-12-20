import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prabhaw | Frontend Architect & DevOps Engineer",
  description: "Crafting immersive digital experiences with focus on performance, accessibility, and modern aesthetics. Explore my portfolio of full-stack projects and cloud-native architectures.",
  keywords: ["Frontend Architect", "DevOps Engineer", "React", "Next.js", "TypeScript", "AWS", "Kubernetes", "Web Development", "Portfolio"],
  authors: [{ name: "Prabhaw Kumar" }],
  openGraph: {
    title: "Prabhaw | Frontend Architect & DevOps Engineer",
    description: "Frontend Architect & DevOps Engineer specializing in building scalable web applications and automated infrastructure.",
    url: "https://prabhaw.vercel.app", // Using placeholder, assuming future deployment domain
    siteName: "Prabhaw's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhaw | Frontend Architect & DevOps Engineer",
    description: "Frontend Architect & DevOps Engineer. Building the future of web.",
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
        <Navbar />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}