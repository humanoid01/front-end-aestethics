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
          {/* floating dialog title */}
          <div className='text-box__title-container'>
            <div className='text-box__title'>
              <p>{planet.name}</p>
            </div>
          </div>
          {/* floating ref to dialog title */}
          <div className='text-box-ref'>
            {/* floating dialog containing content of the planet  */}
            <div className='text-box__container'>
              <div className='transmission'>Incoming transmission: </div>
              <div className='text-box'>
                <div className='planet-description'>
                  <br />
                  <div className='planet-info'>
                    <p className='planet-mass'>Planet mass: {planet.mass}</p>
                    <p className='planet-days'>
                      Earth days to orbit Sun: {planet.velocity} days
                    </p>
                    <p className='planet-years'>
                      Earth years to orbit Sun: {planet.noEarthYears} year(s)
                    </p>
                    <p className='planet-kilometers'>
                      Planet distance from Sun: {planet.kilometers}
                    </p>
                    <p className='planet-au'>
                      Planet distance from Sun: {planet.au}
                      <span
                        style={{ cursor: 'help' }}
                        title="AU - astronomical unit is the distance from the Sun to Earth's orbit, 150 million kilometers">
                        AU
                      </span>
                    </p>
                  </div>

                  <br />
                  <div className='planet-long-description'>
                    <p>{planet.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
