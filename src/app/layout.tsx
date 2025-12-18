import "./globals.css";
import Navbar from "@/components/Navbar";
import { metadata } from "@/lib/seo";
import { Inter } from "next/font/google";

export { metadata };

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-white antialiased bg-[#0a0a0a]">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
          <div className="absolute left-1/3 top-[-20%] h-[600px] w-[600px] rounded-full bg-white/[0.06] blur-[120px]" />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}