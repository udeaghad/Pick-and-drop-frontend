import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { store } from '../../store';
import Header from '../../components/Header';


describe('Header Component', () => {
  it('Should display a Home text', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>,
    );

    const navBar = screen.getByTestId('nav-bar')
    expect(navBar.innerHTML).toContain("Home")
    expect(navBar.innerHTML).toContain("Track Your Order")
    expect(navBar.innerHTML).toContain("Report")
  })

  it('Should display a dropdown text', () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>,
    );
    const navBar = screen.getByTestId('nav-bar')
    const dropdown = screen.getByTestId('dropdown')
    
    act(() => {
      dropdown.click()    
    })
    

    expect(navBar.innerHTML).toContain("Register Company")
    expect(navBar.innerHTML).toContain("Settings")
    expect(navBar.innerHTML).toContain("Your Profile")
  }) 
})

