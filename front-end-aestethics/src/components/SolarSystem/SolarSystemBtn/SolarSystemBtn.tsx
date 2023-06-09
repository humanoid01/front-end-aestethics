import React, { useState } from 'react';
import './SolarSystemBtn.css';
interface SolarSystemBtnProps {
  options: [string, number][];
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

  const currentOptionLabel = options[option][0];

  return (
    <div className='galaxy-button' onClick={handleClick}>
      <button>
        <div style={{ color: 'white' }}>{currentOptionLabel}</div>
      </button>
      <div className='bodydrop'></div>
    </div>
  );
};
