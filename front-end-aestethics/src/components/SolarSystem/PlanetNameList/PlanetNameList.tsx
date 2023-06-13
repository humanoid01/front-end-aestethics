import { Planet } from '../../../data/SolarSystem/planets';
import { SolarSystemModal } from '../SolarSystemModal/SolarSystemModal';
import { Fragment, useState } from 'react';

interface PlanetNameListProps {
  planets: [string, Planet][];
}

export const PlanetNameList = ({ planets }: PlanetNameListProps) => {
  const [displayCurrentPlanet, setDisplayCurrentPlanet] = useState<
    null | string
  >(null);

  return (
    // List of planet names
    <div className='planet-names'>
      {planets.map(([_, planet]) => {
        return (
          <Fragment key={planet.name}>
            <div
              className='dialog-text planet-list-name'
              onClick={() => {
                if (planet.name === displayCurrentPlanet)
                  return setDisplayCurrentPlanet(null);
                setDisplayCurrentPlanet(planet.name);
              }}>
              {planet.name}
            </div>
            {/* Modal */}
            <SolarSystemModal
              displayCurrentPlanet={displayCurrentPlanet}
              planet={planet}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
