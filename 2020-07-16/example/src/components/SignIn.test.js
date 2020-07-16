import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from './SignIn';

describe('SignIn', () => {
  it('debería contener un input tipo email', () => {
    const { getByPlaceholderText } = render(<SignIn />);
    const input = getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('email');
  });

  it('debería contener un input tipo password', () => {
    // ...
  });

  it('debería contener un botón', () => {
    // ...
  });

  it('debería mostrar botón como deshabilitado con campos vacios', () => {
    const { getByText } = render(<SignIn />);
    const btn = getByText('Sign in!');
    expect(btn.disabled).toBe(true);
  });

  it('debería mostrar botón como habilitado con campos NO vacios', () => {
    const { getByText, getByPlaceholderText } = render(<SignIn />);
    const input = getByPlaceholderText('Email');
    const btn = getByText('Sign in!');

    expect(btn.disabled).toBe(true);

    // userEvent.type(input, 'lupo@laboratoria.la');
    fireEvent.change(input, { target: { value: 'blah' }});

    expect(btn.disabled).toBe(false);

    // btn.click();
    userEvent.click(btn);

    // ...
  });
});