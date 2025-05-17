import "./globals.css";

export const metadata = {
  title: "Product App",
  description: "A simple product app with Next.js and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
