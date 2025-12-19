import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased transition-colors duration-300">
        <Navbar />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}