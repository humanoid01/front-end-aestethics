import './SolarSystem.css';
// import galaxy from '../../assets/SolarSystem/galaxy.jpg'
import sun from '../../assets/SolarSystem/sun.png';
import mercury from '../../assets/SolarSystem/mercury.png';
import venus from '../../assets/SolarSystem/venus.png';
import earth from '../../assets/SolarSystem/earth.png';
import mars from '../../assets/SolarSystem/mars.png';
import jupiter from '../../assets/SolarSystem/jupiter.png';
import saturn from '../../assets/SolarSystem/saturn.png';
import uranus from '../../assets/SolarSystem/uranus.png';
import neptune from '../../assets/SolarSystem/neptune.png';

const planets = {
  mercury: {
    img: mercury,
    name: 'mercury',
  },
  venus: {
    img: venus,
    name: 'venus',
  },
  earth: {
    img: earth,
    name: 'earth',
  },
  mars: {
    img: mars,
    name: 'mars',
  },
  jupiter: {
    img: jupiter,
    name: 'jupiter',
  },
  saturn: {
    img: saturn,
    name: 'saturn',
  },
  uranus: {
    img: uranus,
    name: 'uranus',
  },
  neptune: {
    img: neptune,
    name: 'neptune',
  },
};

export const SolarSystem = () => {
  return (
    <div className='solar-system'>
      <img className='celestial' src={sun} alt='sun' id='sun' />
      {Object.entries(planets).map(([key, value]) => {
        return (
          <img
            className='celestial planet'
            src={value.img}
            alt={value.name}
            id={value.name}
          />
        );
      })}
    </div>
  );
};
