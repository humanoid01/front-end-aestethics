import './SolarSystem.css';
import sun from '../../assets/SolarSystem/sun.png';
import { planets } from '../../data/SolarSystem/planets';
import { SolarSystemBtn } from './SolarSystemBtn/SolarSystemBtn';
import { useState } from 'react';

export const SolarSystem = () => {
  const options: [string, number][] = [
    ['1day/1s', 1],
    ['180days/1s', 180],
    ['1year/1s', 365],
    ['2years/1s', 730],
    ['5years/1s', 1825],
  ];
  const [option, setOption] = useState(0);
  const [displayCurrentPlanet, setDisplayCurrentPlanet] = useState<
    null | string
  >(null);
  const plantesArray = Object.entries(planets);
  const currentOptionValue = options[option][1];

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
      <div className='solar-system-container'>
        {' '}
        <img className='celestial' src={sun} alt='sun' id='sun' />
        {plantesArray.map(([_, planet]) => {
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
                  right: `${planet.rad * 7}px`,
                  animation: `unorbit linear ${
                    planet.velocity / currentOptionValue
                  }s infinite`,
                }}
              />
            </div>
          );
        })}
        {plantesArray.map(([_, planet]) => {
          return (
            <div
              key={planet.name}
              className='celestial orbits '
              style={{
                height: `${planet.rad * 7}px`,
                width: `${planet.rad * 7}px`,
              }}
            />
          );
        })}
      </div>

      <SolarSystemBtn options={options} onClick={() => handleOption()} />
      <div className='planet-names'>
        {plantesArray.map(([_, planet]) => {
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

              {displayCurrentPlanet === planet.name ? (
                <div className='dialog-wrapper  dialog-text'>
                  <div className='text-box-title-container'>
                    <div className='text-box-title'>
                      <p className='planet-title'>{planet.name}</p>
                    </div>
                  </div>
                  <div className='text-box-ref'>
                    <div className='text-box-container'>
                      <div className='transmission'>
                        Incoming transmission:{' '}
                      </div>
                      <div className='text-box'>
                        <div className='planet-description'>
                          <br />
                          <p>Planet mass: {planet.mass}</p>
                          <p>Earth days to orbit Sun: {planet.velocity} days</p>
                          <p>
                            Earth years to orbit Sun: {planet.noEarthYears}{' '}
                            year(s)
                          </p>
                          <p>Planet distance from Sun: {planet.kilometers}</p>
                          <p>
                            Planet distance from Sun: {planet.au}
                            <span
                              style={{ cursor: 'help' }}
                              title="AU - astronomical unit is the distance from the Sun to Earth's orbit, 150 million kilometers">
                              AU
                            </span>
                          </p>
                          <br />
                          <p>{planet.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
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
