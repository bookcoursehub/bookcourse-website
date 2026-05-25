import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://bookcourse.co.uk"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: "https://bookcourse.co.uk",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.name
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
