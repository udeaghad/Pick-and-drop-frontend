import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { store } from '../../store';
import Header from '../../components/Header';

describe('Header Component', () => {
  it('Should display a Home text', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const text = getByRole('navigation')
  })
})

