import { render } from '@testing-library/react';
import { SolarSystem } from './SolarSystem';

describe('SolarSystem', () => {
  it('Renders child components correctly', () => {
    const { container } = render(<SolarSystem />);

    expect(
      container.querySelector('.solar-system__container')
    ).toBeInTheDocument();
    expect(container.querySelector('.planet-names')).toBeInTheDocument();
    expect(container.querySelector('.galaxy-button')).toBeInTheDocument();
  });
});
