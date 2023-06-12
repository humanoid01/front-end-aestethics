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
import { SolarSystemBtn } from './SolarSystemBtn/SolarSystemBtn';
import { useState } from 'react';
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
    velocity: 88,
  },
  venus: {
    img: venus,
    name: 'venus',
    rad: 16,
    deg: 0,
    velocity: 255,
  },
  earth: {
    img: earth,
    name: 'earth',
    rad: 25,
    deg: 0,
    velocity: 365,
  },
  mars: {
    img: mars,
    name: 'mars',
    rad: 35,
    deg: 0,
    velocity: 687,
  },
  jupiter: {
    img: jupiter,
    name: 'jupiter',
    rad: 56,
    deg: 0,
    velocity: 4333,
  },
  saturn: {
    img: saturn,
    name: 'saturn',
    rad: 69,
    deg: 0,
    velocity: 10759,
  },
  uranus: {
    img: uranus,
    name: 'uranus',
    rad: 83,
    deg: 0,
    velocity: 30687,
  },
  neptune: {
    img: neptune,
    name: 'neptune',
    rad: 95,
    deg: 0,
    velocity: 60190,
  },
};

export const SolarSystem = () => {
  const options: [string, number][] = [
    ['1day/1s', 1],
    ['180days/1s', 180],
    ['1year/1s', 365],
    ['2years/1s', 730],
    ['5years/1s', 1825],
  ];
  const [option, setOption] = useState(0);
  const handleOption = () => {
    const length = options.length - 1;
    if (option === length) {
      setOption(0);
    }
    if (option < length) {
      setOption(option + 1);
    }
  };

  const currentOptionValue = options[option][1];
  return (
    <div className='solar-system'>
      <img className='celestial' src={sun} alt='sun' id='sun' />
      {Object.entries(planets).map(([_, value]) => {
        return (
          <div
            key={value.name}
            className='celestial rotate planet'
            // new orbit solution
            style={{
              animation: `orbit linear ${
                value.velocity / currentOptionValue
              }s infinite`,
            }}>
            <img
              className='celestial'
              src={value.img}
              alt={value.name}
              id={value.name}
              // new orbit solution
              style={{
                right: `${value.rad}vmin`,
                animation: `unorbit linear ${
                  value.velocity / currentOptionValue
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
      <SolarSystemBtn options={options} onClick={() => handleOption()} />

      <div className='dialog-wrapper'>
        <div className='text-box-ref'>
          <div className='text-box-container'>
            <div className='text-box'></div>
          </div>
        </div>
        <div className='text-box-title-container'>
          <div className='text-box-title'></div>
        </div>
      </div>
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
