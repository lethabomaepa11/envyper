import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;
  return (
    <div className="w-full h-[calc(100vh-65px)] grid place-items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
