import {
  Cormorant_Garamond,
  Great_Vibes,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Aman Weds Ananya | 7 December 2026",
  description:
    "Aman and Ananya invite you to celebrate their wedding in Lucknow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${script.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
