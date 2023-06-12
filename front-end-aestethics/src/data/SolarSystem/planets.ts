import mercury from '../../assets/SolarSystem/mercury.png';
import venus from '../../assets/SolarSystem/venus.png';
import earth from '../../assets/SolarSystem/earth.png';
import mars from '../../assets/SolarSystem/mars.png';
import jupiter from '../../assets/SolarSystem/jupiter.png';
import saturn from '../../assets/SolarSystem/saturn.png';
import uranus from '../../assets/SolarSystem/uranus.png';
import neptune from '../../assets/SolarSystem/neptune.png';
export interface Planet {
  img: string;
  name: string;
  rad: number;
  deg: number;
  velocity: number;
  kilometers: string;
  au: string;
  mass: string;
  noEarthYears: string;
  description: string;
}

export interface Planets {
  [key: string]: Planet;
}
export const planets: Planets = {
  mercury: {
    img: mercury,
    name: 'mercury',
    rad: 11,
    deg: 0,
    velocity: 88,
    kilometers: '57.9 m. kilometers',
    au: '0.39',
    mass: '3.3 x 10^23',
    noEarthYears: '0.24',
    description:
      'Mercury, the closest planet to the Sun, is a small and rocky world that holds the distinction of being the smallest planet in our solar system. Its proximity to the Sun means that it experiences extreme temperature variations, swinging from scorching hot during the day to freezing cold at night. With a surface covered in craters and a lack of significant atmosphere, Mercury has a rugged and desolate appearance. Despite its size, it possesses a relatively large iron core, accounting for a significant portion of its mass. Due to its close proximity to the Sun, observing Mercury can be challenging, as it is usually visible only during twilight hours.',
  },
  venus: {
    img: venus,
    name: 'venus',
    rad: 16,
    deg: 0,
    velocity: 255,
    kilometers: '108.2 m. kilometers',
    au: '0.72',
    mass: '4.87 x 10^24',
    noEarthYears: '0.62',
    description: `Venus, often referred to as Earth's "sister planet," is a rocky planet similar in size and composition. However, it stands out with its dense atmosphere, which is primarily composed of carbon dioxide, creating a runaway greenhouse effect. This leads to a scorching and inhospitable surface with temperatures hot enough to melt lead. Venus is known for its thick cloud cover, consisting of sulfuric acid clouds that obscure its surface from direct view. The planet's surface is dotted with numerous volcanoes and vast lava plains, indicating a history of intense geological activity.`,
  },
  earth: {
    img: earth,
    name: 'earth',
    rad: 25,
    deg: 0,
    velocity: 365,
    kilometers: '149.6 m. kilometers',
    au: '1',
    mass: '5.97 x 10^24',
    noEarthYears: '1',
    description: `Earth, our home planet, is a diverse and vibrant world teeming with life. With a rich atmosphere and moderate temperatures, it supports a wide array of ecosystems and provides a nurturing environment for countless species. It has a dynamic surface, featuring vast oceans, towering mountains, sprawling forests, and expansive deserts. The presence of liquid water is a unique characteristic of Earth, making it the only known planet in the universe to harbor life. Earth's position in the solar system, within the habitable zone, ensures its optimal distance from the Sun for the existence of liquid water and the conditions necessary for life as we know it.`,
  },
  mars: {
    img: mars,
    name: 'mars',
    rad: 35,
    deg: 0,
    velocity: 687,
    kilometers: '227.9 m. kilometers',
    au: '1.52',
    mass: '6.42 x 10^23',
    noEarthYears: '1.88',
    description: `Mars, often called the "Red Planet", captivates with its rusty-hued appearance. It is a cold and arid world with a thin atmosphere composed mainly of carbon dioxide. Mars boasts the largest volcano in the solar system, Olympus Mons, and the longest canyon, Valles Marineris. Although its surface is marked by impact craters, Mars also exhibits signs of ancient riverbeds, indicating the presence of liquid water in the past. Scientists continue to search for traces of microbial life and investigate the possibility of future human exploration and colonization on Mars.`,
  },
  jupiter: {
    img: jupiter,
    name: 'jupiter',
    rad: 56,
    deg: 0,
    velocity: 4333,
    kilometers: '778.6 m. kilometers',
    au: '5.20',
    mass: ' 1.90 x 10^27',
    noEarthYears: '11.86',
    description: `Jupiter, the largest planet in our solar system, is a gas giant with a diameter over 11 times that of Earth. Its colossal mass exerts a gravitational pull strong enough to capture numerous moons, the most notable being the four Galilean moons: Io, Europa, Ganymede, and Callisto. Jupiter's atmosphere is predominantly composed of hydrogen and helium, giving it its characteristic striped appearance with swirling bands of clouds. The planet is home to the famous Great Red Spot, a massive storm system larger than Earth, which has been observed for centuries.`,
  },
  saturn: {
    img: saturn,
    name: 'saturn',
    rad: 69,
    deg: 0,
    velocity: 10759,
    kilometers: '1.43 b. kilometers',
    au: '9.58',
    mass: '5.68 x 10^26',
    noEarthYears: '29.46',
    description: `Saturn, known for its magnificent ring system, is the second-largest planet in our solar system. The rings, composed of countless icy particles ranging in size from tiny grains to enormous chunks, encircle the planet's equator. Beneath the rings, Saturn is a gas giant similar in composition to Jupiter, with hydrogen and helium dominating its atmosphere. Saturn possesses a complex system of over 80 moons, with Titan being the most intriguing, harboring lakes of liquid hydrocarbons on its surface. The planet's vibrant and intricate ring system has mesmerized astronomers and stargazers alike throughout history.`,
  },
  uranus: {
    img: uranus,
    name: 'uranus',
    rad: 83,
    deg: 0,
    velocity: 30687,
    kilometers: '2.87 b. kilometers',
    au: '19.18',
    mass: '8.68 x 10^25',
    noEarthYears: '84.01',
    description: `Uranus, the seventh planet from the Sun, stands out with its unique feature: it rotates on its side, nearly perpendicular to its orbital plane. This axial tilt leads to extreme seasonal variations and a distinct set of hemispheres. Uranus is an ice giant, primarily composed of hydrogen, helium, and methane, which gives it a blue-green hue. It possesses a system of faint rings and a collection of more than two dozen moons. Uranus's peculiar characteristics continue to intrigue scientists, who aim to uncover the mysteries of its internal structure and atmospheric dynamics.`,
  },
  neptune: {
    img: neptune,
    name: 'neptune',
    rad: 95,
    deg: 0,
    velocity: 60190,
    kilometers: '4.50 b. kilometers',
    au: '30.07',
    mass: '1.02 x 10^26',
    noEarthYears: '164.79',
    description: `Neptune, the farthest planet from the Sun in our solar system, is another ice giant. Its deep blue coloration is a result of methane in its atmosphere, which absorbs red light and reflects blue light. Neptune boasts strong winds, with the fastest recorded in the solar system, reaching speeds over 2,100 kilometers per hour. The planet has a dynamic atmosphere with cloud systems, including the iconic Great Dark Spot, a storm similar to Jupiter's Great Red Spot but later disappeared. Neptune has a diverse moon system, with Triton being its largest moon and exhibiting fascinating geysers erupting from its icy surface. The study of Neptune provides valuable insights into the outer reaches of our solar system.`,
  },
};
