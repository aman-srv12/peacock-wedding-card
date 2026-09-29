import {
  Cormorant_Garamond,
  Montserrat,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-face",
  display: "swap",
});

const devanagariFont = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600"],
  variable: "--font-devanagari-face",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Aman & Ananya | Wedding Invitation",
    template: "%s | Aman & Ananya",
  },
  description:
    "Join Aman Srivastava and Ananya Jaiswal for their wedding celebrations in Lucknow, 6–8 December 2026.",
  applicationName: "Aman & Ananya Wedding",
  keywords: [
    "Aman Srivastava",
    "Ananya Jaiswal",
    "wedding invitation",
    "Lucknow wedding",
    "December 2026",
  ],
  authors: [{ name: "Aman & Ananya" }],
  creator: "Aman & Ananya",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Aman & Ananya | Wedding Invitation",
    description: "Celebrate with us in Lucknow · 6–8 December 2026",
    siteName: "Aman & Ananya",
  },
  twitter: {
    card: "summary",
    title: "Aman & Ananya | Wedding Invitation",
    description: "Celebrate with us in Lucknow · 6–8 December 2026",
  },
  icons: {
    icon: "/peacock-mark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${devanagariFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
