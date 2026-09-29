import "./globals.css";

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
    description:
      "Celebrate with us in Lucknow · 6–8 December 2026",
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
      <body>{children}</body>
    </html>
  );
}
