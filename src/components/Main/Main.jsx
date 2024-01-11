import { Layout } from 'antd';

import MovieList from '../MovieList';

export default function Main() {
  const { Content } = Layout;
  return (
    <Content className="main">
      <MovieList />
    </Content>
  );
}
