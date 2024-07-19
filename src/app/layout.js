import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ToastContainer } from "react-toastify";
import "./globals.css";
import StoreProvider from "@/Redux/Provider";
export const metadata = {
  title: "Welcome to Sensei",
  description:
    "Life Skill and Education | Mental Wellness | Self and Social Awareness | Moral Guidance and Ethics",
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
