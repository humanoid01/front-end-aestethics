import { Planet } from '../../../data/SolarSystem/planets';
import { SolarSystemModal } from '../SolarSystemModal/SolarSystemModal';
import { useState } from 'react';

interface PlanetNameListProps {
  planets: [string, Planet][];
}

export const PlanetNameList = ({ planets }: PlanetNameListProps) => {
  const [displayCurrentPlanet, setDisplayCurrentPlanet] = useState<
    null | string
  >(null);

  return (
    <div className='planet-names'>
      {planets.map(([_, planet]) => {
        return (
          <div key={planet.name}>
            <div
              className='dialog-text planet-list-name'
              onClick={() => {
                if (planet.name === displayCurrentPlanet)
                  return setDisplayCurrentPlanet(null);
                setDisplayCurrentPlanet(planet.name);
              }}>
              {planet.name}
            </div>
            <SolarSystemModal
              displayCurrentPlanet={displayCurrentPlanet}
              planet={planet}
            />
          </div>
        );
      })}
    </div>
  );
};
