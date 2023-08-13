import React from 'react';
import {
  Button,
  Typography,
  Alert,
  Input,
  Card,
  Tabs,
  Tag
} from 'antd';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

export default function ThemePreview(){
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <Title>Theme Preview</Title>
      <Paragraph>
        One fish two fish red fish blue fish. Black fish blue fish old fish new fish. This one has a littlecar. This one has a little star. Say! What a lot of fish there are.
      </Paragraph>

      <div style={{ marginBottom: '1rem' }}>
        <Button type="primary" style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)'
        }}>Primary Button</Button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Button type="default">Default Button</Button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Button type="dashed">Dashed Button</Button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Button type="text">Text Button</Button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Button type="link">Link Button</Button>
      </div>

      <Alert
        message="Success Message"
        description="This is a success alert to showcase the color scheme."
        type="success"
        showIcon
        style={{ marginBottom: '1rem' }}
      />

      <Alert
        message="Error Message"
        description="This is an error alert to showcase the color scheme."
        type="error"
        showIcon
        style={{ marginBottom: '1rem' }}
      />

      <Alert
        message="Warning Message"
        description="This is a warning alert to showcase the color scheme."
        type="warning"
        showIcon
        style={{ marginBottom: '1rem' }}
      />

      <Alert
        message="Info Message"
        description="This is an info alert to showcase the color scheme."
        type="info"
        showIcon
        style={{ marginBottom: '1rem' }}
      />

      <Input placeholder="Input placeholder text" style={{ marginBottom: '1rem' }} />

      <Card title="Card Title" style={{ marginBottom: '1rem' }}>
        Card content showcasing the <Text code>fontFamilyCode</Text> for code snippets.
      </Card>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <div style={{ marginTop: '1rem' }}>
        <Tag color="magenta">Tag 1</Tag>
        <Tag color="red">Tag 2</Tag>
        <Tag color="volcano">Tag 3</Tag>
        <Tag color="orange">Tag 4</Tag>
      </div>
    </div>
  );
}


