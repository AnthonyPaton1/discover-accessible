import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Discover Accesible venues",
  keywords: "accesible, disability, venues, inclusive environment, safe space",
  description: "Find a new perfect accesible inclusive environment",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
