import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App/App';

// const swapi = new SwapiService();
// swapi.getAllMovies().then((movies) => {
//   movies.forEach((f) => {
//     console.log(f.title);
//   });
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
