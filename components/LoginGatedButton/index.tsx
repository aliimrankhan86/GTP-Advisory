"use client";

import Button from "../Button";
import { useLoginGate } from "@/contexts/LoginGateContext";

type LoginGatedButtonProps = React.ComponentProps<typeof Button>;

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

