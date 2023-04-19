import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../store';
import SearchBar from '../../components/SearchBar';


describe('SearchBar Component', () => {
  const setSearchTerm = () => {
   return "lagos"
  }

  it("Should render input field", () => {
    render(
      <BrowserRouter>
          <Provider store={store}>
          <SearchBar setSearchTerm={setSearchTerm} />
          </Provider>
        </BrowserRouter>
    );

    const searchField = screen.getByRole('searchbox')
    expect(searchField).toHaveAttribute('placeholder', 'Search by city or state...')
    
  })
})