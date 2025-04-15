import React from "react";
import "./index.css";
import Providers from "../context/Providers";
import Navbar from "@/components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="en" className="dark">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
