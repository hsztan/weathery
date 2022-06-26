import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import Spinner from './components/shared/Spinner';
import Header from './components/shared/Header';
import Home from './pages/Home';

test('renders App component', () => {
  render(<Router><App /></Router>);
  expect(screen.getByTestId('App')).toBeInTheDocument();
})

test('renders Header', () => {
  render(<Router><Header /></Router>);
  expect(screen.getByText('Forecaster')).toBeInTheDocument();
});

test('renders Spinner', () => {
  render(<Router><Spinner /></Router>);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
})

test('displays error if address is not valid', () => {
  render(<Provider store={store}><Home /></Provider>);
  const inputNode = screen.getByPlaceholderText('Please enter your address')
  expect(inputNode).toBeInTheDocument();
})
