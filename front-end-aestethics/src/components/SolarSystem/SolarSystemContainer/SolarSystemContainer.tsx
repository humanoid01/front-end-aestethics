import { useEffect, useState } from 'react';
import sun from '../../../assets/SolarSystem/sun.png';
import { Planet } from '../../../data/SolarSystem/planets';
import { useFirstRender } from '../../../useHooks/useFirstRender/useFirstRender';

interface SolarSystemContainerProps {
  options: [string, number][];
  option: number;
  planets: [string, Planet][];
}

export const SolarSystemContainer = ({
  options,
  option,
  planets,
}: SolarSystemContainerProps) => {
  const currentOptionValue = options[option][1];
  const [isSmDown, setIsSmDown] = useState(false);
  const [isXsDown, setIsXsDown] = useState(false);
  const [isMdDown, setIsMdDown] = useState(false);

  const firstRender = useFirstRender();

  const calculateOrbit = (planet: Planet) => {
    if (isMdDown && !isSmDown && !isXsDown) return planet.rad * 7;
    if (isSmDown && !isXsDown) return planet.rad * 4;
    if (isXsDown) return planet.rad * 3;

    return planet.rad * 10;
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight <= 400) {
        return setIsXsDown(true);
      }
      if (window.innerHeight <= 600) {
        return setIsSmDown(true);
      }

      if (window.innerWidth <= 500 && !isXsDown) return setIsXsDown(true);
      if (
        window.innerWidth > 500 &&
        window.innerWidth <= 700 &&
        window.innerWidth <= 1200 &&
        isXsDown
      )
        return setIsXsDown(false);
      if (window.innerWidth <= 700 && !isSmDown) {
        return setIsSmDown(true);
      }
      if (window.innerWidth > 700 && window.innerWidth < 1200 && isSmDown)
        return setIsSmDown(false);
      if (window.innerWidth <= 1200 && !isMdDown) return setIsMdDown(true);
      if (window.innerWidth > 1200 && isMdDown) return setIsMdDown(false);
    };
    if (firstRender) handleResize();
    window.addEventListener('resize', handleResize);
    return () => removeEventListener('resize', handleResize);
  }, [isSmDown, isXsDown, isMdDown, firstRender]);

  return (
    <div className='solar-system-container'>
      <img className='celestial' src={sun} alt='sun' id='sun' />
      {planets.map(([_, planet]) => {
        return (
          <div
            key={planet.name}
            className='celestial rotate planet'
            // new orbit solution
            style={{
              animation: `orbit linear ${
                planet.velocity / currentOptionValue
              }s infinite`,
            }}>
            <img
              className='celestial'
              src={planet.img}
              alt={planet.name}
              id={planet.name}
              // new orbit solution
              style={{
                right: `${planet.rad}vmin`,
                animation: `unorbit linear ${
                  planet.velocity / currentOptionValue
                }s infinite`,
              }}
            />
          </div>
        );
      })}
      {planets.map(([_, planet]) => {
        return (
          <div
            key={planet.name}
            className='celestial orbits '
            style={{
              height: `${planet.rad}vmin`,
              width: `${planet.rad}vmin`,
            }}
          />
        );
      })}
    </div>
  );
};

/*
 Old orbit solution:
  useEffect(() => {
    const renderedPlanets = document.querySelectorAll<HTMLElement>('.planet');

    setInterval(() => {
      renderedPlanets.forEach(planet => {
        const currentPlanet = planets[planet.getAttribute('alt') as string];
  //calculate X coords
        planet.style.left = `${
          Math.cos(currentPlanet.deg) * currentPlanet.rad
        }vmin`;
  // calculate Y coords
        planet.style.top = `${
          Math.sin(currentPlanet.deg) * currentPlanet.rad
        }vmin`;
  // add to our current degree current velocity, so it correctly updates
        currentPlanet.deg += currentPlanet.velocity / 750;
      });
    }, 1);
  }, []);
*/
