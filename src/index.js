import React from 'react';
import ReactDOM from 'react-dom/client';

import SwapiService from './services/MovieDb-service';
import './index.css';
import App from './components/App/App';

const swapi = new SwapiService();
swapi.getMovie('the way back').then((movies) => {
  console.log(movies.results);
  movies.results.forEach((f) => {
    console.log(f.title);
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
