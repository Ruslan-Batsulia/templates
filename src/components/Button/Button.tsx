import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} data-testid="custom-button">
      {label}
    </button>
  );
};

