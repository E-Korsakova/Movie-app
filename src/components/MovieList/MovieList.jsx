import { Flex } from 'antd';

import MovieCard from '../MovieCard';
import './MovieList.css';

export default function MovieList() {
  const cards = [];
  for (let i = 0; i < 20; i += 1) {
    cards.push(<MovieCard key={i} />);
  }
  return <Flex className="movie-list">{cards}</Flex>;
}
