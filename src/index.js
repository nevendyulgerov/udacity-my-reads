import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

const bookshelves = ['currently-reading', 'want-to-read', 'read'];

ReactDOM.render(
  <BrowserRouter>
    <App bookshelves={bookshelves}/>
  </BrowserRouter>,
  document.getElementById('root')
);
