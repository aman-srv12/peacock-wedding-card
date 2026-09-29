import {
  Cormorant_Garamond,
  Great_Vibes,
  Manrope,
} from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-face",
  display: "swap",
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body-face",
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
        className={`${displayFont.variable} ${scriptFont.variable} ${bodyFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
