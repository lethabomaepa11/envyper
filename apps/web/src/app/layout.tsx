import React from "react";
import "./index.css";
import Providers from "../context/Providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
};

export default RootLayout;
