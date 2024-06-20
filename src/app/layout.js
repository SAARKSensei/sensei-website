import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Sensei",
  description: "Life Skill and Education | Mental Wellness | Self and Social Awareness | Moral Guidance and Ethics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " flex min-h-screen flex-col justify-between"
        }
      >
        <Navbar />
        {children}
        <Footer />{" "}
      </body>
    </html>
  );
}
