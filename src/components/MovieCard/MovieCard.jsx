import { Card, Flex, Typography, Space, Tag } from 'antd';
import './MovieCard.css';

export default function MovieCard() {
  const { Paragraph, Text } = Typography;
  return (
    <Card hoverable className="movie-card">
      <img
        alt="poster"
        className="movie-poster"
        src="https://festagent.com/system/tilda/tild6665-3734-4462-b163-623335653163__4b98e300bbffcc3efa7c.jpg"
      />
      <Flex vertical>
        <Typography.Title level={5}>Hancock</Typography.Title>
        <Text type="secondary">June 16, 2008</Text>
        <Space size={[0, 8]} wrap>
          <Tag>Action</Tag>
          <Tag>Drama</Tag>
        </Space>
        <Paragraph>
          There are heroes, there are superheroes, and there is Hancock. Having superpowers comes with responsibility,
          everyone knows that - except him. He takes on any task with his soul and the best intentions, saving people’s
          lives - at the cost of inhuman destruction and incalculable damage. Eventually, the public`&apos;`s patience
          is running out: people are grateful to their local hero, but sometimes they don``&apos;`t understand what they
          did to deserve such punishment.
        </Paragraph>
      </Flex>
    </Card>
  );
}
