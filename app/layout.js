import "./globals.css";

export const metadata = {
  title: "Aman & Ananya",
  description: "Wedding invitation for Aman & Ananya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
