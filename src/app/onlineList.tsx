// app/components/UserTable.tsx
"use client";

import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface User {
  key: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

const UserTable = () => {
  const fakeUsers: User[] = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'jim@example.com',
      role: 'Editor',
      status: 'inactive',
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'joe@example.com',
      role: 'Viewer',
      status: 'pending',
    },
    {
      key: '4',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'active',
    },
    {
      key: '5',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Admin',
      status: 'active',
    },
  ];

  const columns: ColumnsType<User> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Editor', value: 'Editor' },
        { text: 'Viewer', value: 'Viewer' },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={
          status === 'active' ? 'green' : 
          status === 'pending' ? 'orange' : 'red'
        }>
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={fakeUsers}
      pagination={{ pageSize: 5 }}
      bordered
      title={() => <h2>User Management</h2>}
    />
  );
};

export default UserTable;