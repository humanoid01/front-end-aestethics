import './SolarSystem.css';
import sun from '../../assets/SolarSystem/sun.png';
import mercury from '../../assets/SolarSystem/mercury.png';
import venus from '../../assets/SolarSystem/venus.png';
import earth from '../../assets/SolarSystem/earth.png';
import mars from '../../assets/SolarSystem/mars.png';
import jupiter from '../../assets/SolarSystem/jupiter.png';
import saturn from '../../assets/SolarSystem/saturn.png';
import uranus from '../../assets/SolarSystem/uranus.png';
import neptune from '../../assets/SolarSystem/neptune.png';
interface Planet {
  img: string;
  name: string;
  rad: number;
  deg: number;
  velocity: number;
}

interface Planets {
  [key: string]: Planet;
}
const planets: Planets = {
  mercury: {
    img: mercury,
    name: 'mercury',
    rad: 11,
    deg: 0,
    velocity: 4.15,
  },
  venus: {
    img: venus,
    name: 'venus',
    rad: 16,
    deg: 0,
    velocity: 1.59,
  },
  earth: {
    img: earth,
    name: 'earth',
    rad: 25,
    deg: 0,
    velocity: 0.986,
  },
  mars: {
    img: mars,
    name: 'mars',
    rad: 35,
    deg: 0,
    velocity: 0.524,
  },
  jupiter: {
    img: jupiter,
    name: 'jupiter',
    rad: 56,
    deg: 0,
    velocity: 0.083,
  },
  saturn: {
    img: saturn,
    name: 'saturn',
    rad: 69,
    deg: 0,
    velocity: 0.034,
  },
  uranus: {
    img: uranus,
    name: 'uranus',
    rad: 83,
    deg: 0,
    velocity: 0.026,
  },
  neptune: {
    img: neptune,
    name: 'neptune',
    rad: 95,
    deg: 0,
    velocity: 0.01,
  },
};

export const SolarSystem = () => {
  // Old orbit solution:
  // useEffect(() => {
  //   const renderedPlanets = document.querySelectorAll<HTMLElement>('.planet');

  //   setInterval(() => {
  //     renderedPlanets.forEach(planet => {
  //       const currentPlanet = planets[planet.getAttribute('alt') as string];
  // //calculate X coords
  //       planet.style.left = `${
  //         Math.cos(currentPlanet.deg) * currentPlanet.rad
  //       }vmin`;
  // // calculate Y coords
  //       planet.style.top = `${
  //         Math.sin(currentPlanet.deg) * currentPlanet.rad
  //       }vmin`;
  // // add to our current degree current velocity, so it correctly updates
  //       currentPlanet.deg += currentPlanet.velocity / 750;
  //     });
  //   }, 1);
  // }, []);

  return (
    <div className='solar-system'>
      <img className='celestial' src={sun} alt='sun' id='sun' />
      {Object.entries(planets).map(([_, value]) => {
        return (
          <div
            key={value.name}
            className='celestial rotate planet'
            // new orbit strategy
            style={{
              animation: `orbit linear ${(1 / value.velocity) * 10}s infinite`,
            }}>
            <img
              className='celestial'
              src={value.img}
              alt={value.name}
              id={value.name}
              // new orbit strategy
              style={{
                right: `${value.rad}vmin`,
                animation: `unorbit linear ${
                  (1 / value.velocity) * 10
                }s infinite`,
              }}
            />
          </div>
        );
      })}

      {Object.entries(planets).map(([_, value]) => {
        return (
          <div
            className='celestial'
            style={{
              border: 'solid white 1px',
              opacity: 0.4,
              background: 'transparent',
              height: `${value.rad}vmin`,
              width: `${value.rad}vmin`,
              zIndex: 0,
            }}
          />
        );
      })}
    </div>
  );
};
