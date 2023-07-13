import { RenderResult, render } from '@testing-library/react';
import { SolarSystem } from './SolarSystem';

describe('SolarSystem', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<SolarSystem />);
  });

  it('Renders child components correctly', () => {
    const { getByTestId } = renderResult;

    expect(getByTestId('solar-system__container')).toBeInTheDocument();
    expect(getByTestId('planet-names')).toBeInTheDocument();
    expect(getByTestId('galaxy-button')).toBeInTheDocument();
  });
});
