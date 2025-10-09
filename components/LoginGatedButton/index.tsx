"use client";

import Button from "../Button";
import { useLoginGate } from "@/contexts/LoginGateContext";

type LoginGatedButtonProps = {
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  stroke?: boolean;
  ghost?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const LoginGatedButton = ({ onClick, ...props }: LoginGatedButtonProps) => {
  const { openLoginPrompt } = useLoginGate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openLoginPrompt();
    if (onClick) {
      onClick(e);
    }
  };

  return <Button {...props} onClick={handleClick} />;
};

export default LoginGatedButton;

