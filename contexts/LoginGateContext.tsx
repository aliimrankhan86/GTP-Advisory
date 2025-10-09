"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type LoginGateContextType = {
  isLoginPromptOpen: boolean;
  loginMode: "signin" | "signup";
  openLoginPrompt: (mode?: "signin" | "signup") => void;
  closeLoginPrompt: () => void;
};

const LoginGateContext = createContext<LoginGateContextType | undefined>(undefined);

export const LoginGateProvider = ({ children }: { children: ReactNode }) => {
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);
  const [loginMode, setLoginMode] = useState<"signin" | "signup">("signin");

  const openLoginPrompt = (mode: "signin" | "signup" = "signin") => {
    setLoginMode(mode);
    setIsLoginPromptOpen(true);
  };
  
  const closeLoginPrompt = () => setIsLoginPromptOpen(false);

  return (
    <LoginGateContext.Provider value={{ isLoginPromptOpen, loginMode, openLoginPrompt, closeLoginPrompt }}>
      {children}
    </LoginGateContext.Provider>
  );
};

export const useLoginGate = () => {
  const context = useContext(LoginGateContext);
  if (context === undefined) {
    throw new Error('useLoginGate must be used within a LoginGateProvider');
  }
  return context;
};

