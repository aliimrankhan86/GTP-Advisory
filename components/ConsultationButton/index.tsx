"use client";

import React from 'react';
import Button from '../Button';
import { useConsultation } from '@/contexts/ConsultationContext';

type ConsultationButtonProps = React.ComponentProps<typeof Button>;

const ConsultationButton: React.FC<ConsultationButtonProps> = ({ onClick, ...props }) => {
  const { openConsultationModal } = useConsultation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
    openConsultationModal();
  };

  return <Button {...props} onClick={handleClick} />;
};

export default ConsultationButton;
