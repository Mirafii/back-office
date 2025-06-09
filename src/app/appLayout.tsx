// app/AppLayout.tsx
"use client";

import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header, Sider, Content } = Layout;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        style={{ paddingTop: '64px' }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%' }}
        >
          <Menu.Item key="1">
            <Link href="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
          <div style={{ color: 'white', fontSize: '1.2rem' }}>My App</div>
        </Header>
        <Content style={{ margin: '88px 16px 24px', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff' }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}