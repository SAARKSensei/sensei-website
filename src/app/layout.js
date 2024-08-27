import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/Logo.svg?url";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { ToastContainer } from "react-toastify";
import StoreProvider from "@/Redux/Provider";
export const metadata = {
  metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
  title: {
    default:
      "Life skills that empower your child in this digital world mentally, emotionally, ethically",
    template: "%s | Sensei",
  },

  description:
    "Life Skill and Education | Mental Wellness | Self and Social Awareness | Moral Guidance and Ethics",
  twitter: {
    card: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en scrollbar-hide">
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        <body
          className={
            "scrollbar-hide flex min-h-screen flex-col justify-between"
          }
        >
          <GoogleAnalytics gaId={process.env.GA_ID} />
          <StoreProvider>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
