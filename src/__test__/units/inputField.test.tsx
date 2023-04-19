import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../store';
import InputField from '../../components/InputField';

describe("InputField component", () => {
  it("Should display the label name", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
          <InputField
            label='Company Name'
            id='company-name'
            name='name'
            placeholder='Enter Company name'
            type='text'

          />
          </Provider>
        </BrowserRouter>
    );

    const label = screen.getByLabelText("Company Name")
    expect(label).toBeTruthy()
  })

  it("Should the display the placeholder text", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
          <InputField
            label='Company Name'
            id='company-name'
            name='name'
            placeholder='Enter Company name'
            type='text'

          />
          </Provider>
        </BrowserRouter>
    );

    const placeholder = screen.getByPlaceholderText("Enter Company name")
    expect(placeholder).toBeTruthy()
  })

  it("Should the show the input field", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
          <InputField
            label='Company Name'
            id='company-name'
            name='name'
            placeholder='Enter Company name'
            type='text'

          />
          </Provider>
        </BrowserRouter>
    );

    const input = screen.getByTestId("input-field")
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', "text")
    expect(input).toHaveAttribute('name', "name")
   
  })
  
  it("Should the show the input field value", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
          <InputField
            label='Company Name'
            id='company-name'
            name='name'
            placeholder='Enter Company name'
            type='text'

          />
          </Provider>
        </BrowserRouter>
    );

    const input = screen.getByTestId("input-field")
    fireEvent.change(input, {target: {innerText: "ABC Logistic"}})
    expect(input.innerText).toBe("ABC Logistic")
   
  })
  
})