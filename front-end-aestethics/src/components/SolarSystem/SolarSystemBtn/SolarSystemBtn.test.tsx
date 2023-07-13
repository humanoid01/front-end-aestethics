import { SolarSystemBtn } from './SolarSystemBtn';
import { render, fireEvent } from '@testing-library/react';

const options: [string, number][] = [
  ['1day/1s', 1],
  ['180days/1s', 180],
  ['1year/1s', 365],
  ['2years/1s', 730],
  ['5years/1s', 1825],
];

describe('SolarSystemBtn', () => {
  it('Renders correctly', () => {
    const rendered = render(<SolarSystemBtn options={options} />);
    const { getByTestId } = rendered;
    const btn = getByTestId('galaxy-button');

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(options[0][0]);
  });

  it('when clicked, the label switches to the next option and clicking when the last option is active switches back to the first', () => {
    const rendered = render(<SolarSystemBtn options={options} />);
    const { getByTestId } = rendered;
    const btn = getByTestId('galaxy-button');

    expect(btn).toHaveTextContent(options[0][0]);
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(options[1][0]);
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(options[2][0]);
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(options[3][0]);
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(options[4][0]);
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(options[0][0]);
  });
});
