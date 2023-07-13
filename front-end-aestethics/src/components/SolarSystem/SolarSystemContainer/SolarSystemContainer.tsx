import sun from '../../../assets/SolarSystem/sun.webp';
import { Planet } from '../../../data/SolarSystem/planets';

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

  return (
    <div
      className='solar-system__container'
      data-testid='solar-system__container'>
      <img className='celestial' src={sun} alt='sun' id='sun' />
      {planets.map(([_, planet]) => {
        return (
          <div
            key={planet.name}
            className='celestial rotate planet'
            // new orbit solution, makes planets move on orbits their separate orbits
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
              // new orbit solution, it "stops" spinning planets
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
      {/* Orbits */}
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
