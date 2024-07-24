import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/Logo.svg?url";
// import { ToastContainer } from "react-toastify";
import StoreProvider from "@/Redux/Provider";
export const metadata = {
  metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
  title: {
    default: "Welcome to Sensei",
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
      <html lang="en">
        <body className={"flex min-h-screen flex-col justify-between"}>
          <StoreProvider>
            <Navbar />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
