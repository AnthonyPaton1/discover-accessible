import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Discover Accessible venues",
  keywords:
    "accessible, disability, venues, inclusive, inclusive environment, safe space, disabled facilities, Autism friendly, Guide dogs allowed, ",
  description: "Find a new perfect accessible inclusive environment",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <head>
            <title>{metadata.title}</title>
            <meta name="keywords" content={metadata.keywords} />
            <meta name="description" content={metadata.description} />
            <link rel="icon" href="/images/properties/Icon.png" sizes="any" />
          </head>

          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
