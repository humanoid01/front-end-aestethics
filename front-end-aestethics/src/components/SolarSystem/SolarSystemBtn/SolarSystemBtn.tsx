import React, { useState } from 'react';
interface SolarSystemBtnProps {
  options: string[];
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const SolarSystemBtn = ({ options, onClick }: SolarSystemBtnProps) => {
  const [option, setOption] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const length = options.length - 1;
    if (option === length) {
      setOption(0);
    }
    if (option < length) {
      setOption(option + 1);
    }

    onClick?.(e);
  };

  return <div onClick={handleClick}>{options[option]}</div>;
};
