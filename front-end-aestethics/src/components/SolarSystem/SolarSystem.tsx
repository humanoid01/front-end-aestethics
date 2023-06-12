import './SolarSystem.css';
import { planets } from '../../data/SolarSystem/planets';
import { SolarSystemBtn } from './SolarSystemBtn/SolarSystemBtn';
import { useState } from 'react';
import { PlanetNameList } from './PlanetNameList/PlanetNameList';
import { SolarSystemContainer } from './SolarSystemContainer/SolarSystemContainer';

export const SolarSystem = () => {
  const options: [string, number][] = [
    ['1day/1s', 1],
    ['180days/1s', 180],
    ['1year/1s', 365],
    ['2years/1s', 730],
    ['5years/1s', 1825],
  ];
  const [option, setOption] = useState(0);

  const plantesArray = Object.entries(planets);

  const handleOption = () => {
    const length = options.length - 1;
    if (option === length) {
      setOption(0);
    }
    if (option < length) {
      setOption(option + 1);
    }
  };

  return (
    <div className='solar-system'>
      <SolarSystemContainer
        option={option}
        options={options}
        planets={plantesArray}
      />
      <PlanetNameList planets={plantesArray} />
      <SolarSystemBtn options={options} onClick={() => handleOption()} />
    </div>
  );
};
