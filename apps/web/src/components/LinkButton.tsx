"use client";

import React from "react";
import { Button, type ButtonProps } from "@heroui/button";
import { Link } from "@heroui/react";

interface LinkButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Button {...props} as={Link}>
      {props.children}
    </Button>
  );
};

export default LinkButton;
