import { createRoot } from 'react-dom/client';

import SwapiService from './services/MovieDb-service';
import './index.css';
import App from './components/App';

const swapi = new SwapiService();
swapi.getMovie('the way back').then((movies) => {
  console.log(movies.results);
  movies.results.forEach((f) => {
    console.log(f.title);
  });
});

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(<App />);
