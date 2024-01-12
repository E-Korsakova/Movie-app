import { Card, Flex, Typography, Space, Tag } from 'antd';
// import './MovieCard.css';

const { Paragraph, Text } = Typography;
const cardStyle = {
  maxWidth: '450px',
  maxHeight: '280px',
  borderRadius: 'none',
  boxShadow: '1px 5px 10px rgba(0, 0, 0, 0.15)',
  display: 'flex',
};
const posterStyle = {
  height: '280px',
  objectFit: 'cover',
};

export default function MovieCard() {
  return (
    <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
      <Flex justify="space-between">
        <img
          alt="poster"
          src="https://festagent.com/system/tilda/tild6665-3734-4462-b163-623335653163__4b98e300bbffcc3efa7c.jpg"
          style={posterStyle}
        />
        <Flex vertical align="flex-start" style={{ padding: '0 20px', gap: '10px' }}>
          <Typography.Title level={5} style={{ margin: '0', marginTop: '5px', fontSize: '28px' }}>
            Hancock
          </Typography.Title>
          <Text type="secondary">June 16, 2008</Text>
          <Space size={[0, 8]} wrap>
            <Tag>Action</Tag>
            <Tag>Drama</Tag>
          </Space>
          <Paragraph ellipsis={{ rows: 6 }} style={{ maxWidth: '230px', textAlign: 'start', fontSize: '12px' }}>
            There are heroes, there are superheroes, and there is Hancock. Having superpowers comes with responsibility,
            everyone knows that - except him. He takes on any task with his soul and the best intentions, saving
            people’s lives - at the cost of inhuman destruction and incalculable damage. Eventually, the public`&apos;`s
            patience is running out: people are grateful to their local hero, but sometimes they don`&apos;`t understand
            what they did to deserve such punishment.
          </Paragraph>
        </Flex>
      </Flex>
    </Card>
  );
}
