import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Breeder's Cup",
  description: "Buy tickets now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-screen-xl px-8 xl:px-0 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
