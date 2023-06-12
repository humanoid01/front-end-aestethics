import { Planet } from '../../../data/SolarSystem/planets';
interface SolarSystemModalProps {
  displayCurrentPlanet: null | string;
  planet: Planet;
}

export const SolarSystemModal = ({
  displayCurrentPlanet,
  planet,
}: SolarSystemModalProps) => {
  return (
    <>
      {displayCurrentPlanet === planet.name ? (
        <div className='dialog-wrapper  dialog-text'>
          <div className='text-box-title-container'>
            <div className='text-box-title'>
              <p className='planet-title'>{planet.name}</p>
            </div>
          </div>
          <div className='text-box-ref'>
            <div className='text-box-container'>
              <div className='transmission'>Incoming transmission: </div>
              <div className='text-box'>
                <div className='planet-description'>
                  <br />
                  <p>Planet mass: {planet.mass}</p>
                  <p>Earth days to orbit Sun: {planet.velocity} days</p>
                  <p>Earth years to orbit Sun: {planet.noEarthYears} year(s)</p>
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
    </>
  );
};
