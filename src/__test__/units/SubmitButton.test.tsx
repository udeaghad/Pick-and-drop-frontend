import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../store';
import SubmitButton from '../../components/SubmitButton';

describe("SubmitButton Component", () => {
  it("Should display button", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <SubmitButton 
              buttonType='submit'
              buttonText='Register'
            />
          </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("Should show button type attribute", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <SubmitButton 
              buttonType='submit'
              buttonText='Register'
            />
          </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("type", "submit")
  })
})