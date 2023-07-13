import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render App without errors', () => {
    render(<App />);
  });

  it('Should render SolarSystem component within App', () => {
    const { container } = render(<App />);
    const solarSystemComponent = container.querySelector('.solar-system');
    expect(solarSystemComponent).toBeInTheDocument();
  });
});
