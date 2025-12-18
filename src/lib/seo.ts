import type { Metadata } from "next";

export const siteConfig = {
  name: "Prabhaw Kumar",
  title: "Prabhaw Kumar — DevOps & Software Engineer",
  description:
    "DevOps Engineer and Software Engineer specializing in AWS, Docker, Kubernetes, CI/CD pipelines, and cloud-native systems.",
  url: "https://your-domain.com",
  ogImage: "/og.png",
  keywords: [
    "DevOps Engineer",
    "Software Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Jenkins",
    "Terraform",
    "Cloud Engineer",
  ],
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};