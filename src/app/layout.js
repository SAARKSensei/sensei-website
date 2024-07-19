import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ToastContainer } from "react-toastify";
import "./globals.css";
import StoreProvider from "@/Redux/Provider";
export const metadata = {
  title: "Sensei",
  description:
    "Life Skill and Education | Mental Wellness | Self and Social Awareness | Moral Guidance and Ethics",
  // icons: [
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "32x32",
  //     url: "/favicon-32x32.png",
  //   },
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "16x16",
  //     url: "/favicon-16x16.png",
  //   },
  //   {
  //     rel: "apple-touch-icon",
  //     sizes: "180x180",
  //     url: "/apple-touch-icon.png",
  //   },
  // ],
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
