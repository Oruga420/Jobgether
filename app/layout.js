import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro De La Mora - AI Solutions Architect Resume",
  description:
    "Resume of Alejandro De La Mora, AI Solutions Architect & GenAI Content Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
