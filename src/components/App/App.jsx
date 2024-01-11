import { Layout } from 'antd';

import AppHeader from '../AppHeader';
import Main from '../Main';
import './App.css';

function App() {
  return (
    <Layout className="App">
      <AppHeader />
      <Main />
    </Layout>
  );
}

export default App;
