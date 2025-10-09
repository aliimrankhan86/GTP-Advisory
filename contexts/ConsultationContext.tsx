"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type ConsultationContextType = {
  isConsultationModalOpen: boolean;
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
};

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider = ({ children }: { children: ReactNode }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const openConsultationModal = () => setIsConsultationModalOpen(true);
  const closeConsultationModal = () => setIsConsultationModalOpen(false);

  return (
    <ConsultationContext.Provider value={{ isConsultationModalOpen, openConsultationModal, closeConsultationModal }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};
