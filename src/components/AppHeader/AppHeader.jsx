import { Layout, Tabs, Input } from 'antd';

export default function AppHeader() {
  const { Header } = Layout;
  const onChange = (key) => {
    console.log(key);
  };
  const tabItems = [
    {
      key: '1',
      label: 'Search',
    },
    {
      key: '2',
      label: 'Rated',
    },
  ];
  return (
    <Header className="App-header">
      <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
      <Input placeholder="Type to search..." />
    </Header>
  );
}
