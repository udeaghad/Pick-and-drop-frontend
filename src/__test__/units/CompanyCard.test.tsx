import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../store';
import CompanyCard from '../../components/CompanyCard';

describe('CompanyCard Component', () => {
  const companyProps = {
    _id: "125a",
    name: "PickUp", 
    city: "Ikeja", 
    state: "Lagos", 
    offices: [{_id: "1", name:"Grace", location:"Alausa"}, {_id: "2", name:"Isaiah", location:"Lekki"}], 
    rating: 0, 
    phoneNumber: "0803256477"
  }

  const {_id, name, city, state, offices, rating, phoneNumber } = companyProps;
  it('Should display a Company name', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const companyName = screen.getByTestId('company-name')
    expect(companyName.innerHTML).toBe(name.toUpperCase())
  })
  
  it('Should display a Company location', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const companyLocation = screen.getByTestId('company-location')
    expect(companyLocation.innerHTML).toBe(`${city}, ${state}`)
  })

  it('Should display a Company logo', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const companylogo = screen.getByTestId('company-logo')
    expect(companylogo).toHaveAttribute('src', "charlesdeluvio-pOUA8Xay514-unsplash.jpg")
    expect(companylogo).toHaveAttribute('alt', `img-${name}`)
  })

  it('Should render a heading \'Select a pick-up branch\'', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const selectHeading = screen.getByTestId('selection-heading')
    expect(selectHeading.innerHTML).toBe('Select a pick-up branch')
    
  })

  it('Should render a office locations', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const officeLocations = screen.getByTestId('office-locations')
    expect(officeLocations.innerHTML).toContain(offices[0].location)
    expect(officeLocations.innerHTML).toContain(offices[1].location)
    
  })

  it('Should render a company phone number', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const companyPhone = screen.getByTestId('company-phone')
    expect(companyPhone.innerHTML).toContain(phoneNumber)
    
    
  })

  it('Should render a company rating', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <CompanyCard 
             key={_id}
             id={_id} 
             name={name} 
             phoneNumber={phoneNumber} 
             city={city}
             state={state}
             offices={offices}
             rating={rating}
            />
          </Provider>
        </BrowserRouter>
    );
  
    const companyRating = screen.getByTestId('company-rating')
    expect(companyRating.innerHTML).toContain(`Rating: ${rating}`)
    
    
  })
})