import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import data from './data';

describe('App', () => {
  it('should render first page on load', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);
    expect(el).toBeInTheDocument();
  });

  it('should display next page on click', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);
    fireEvent.click(el);
    expect(getByText(data[1].text)).toBeInTheDocument();
  });

  it('should go back to first page when click on last page', () => {
    const { getByText } = render(<App />);

    data.forEach((item) => {
      const el = getByText(item.text);
      expect(el).toBeInTheDocument();
      fireEvent.click(el);
    });

    expect(getByText(data[0].text)).toBeInTheDocument();
  });
});
