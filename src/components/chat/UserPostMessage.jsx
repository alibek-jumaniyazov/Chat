import React from 'react';
import { Button, Input, Space } from 'antd'
import {  LinkOutlined } from '@ant-design/icons';

export default function UserPostMessage() {


  return (
    <div className='UserPostMessage'>
      <LinkOutlined className='userPostMessange__file'/>
      <Space.Compact style={{ width: '100%', height:'50px' }}>
        <Input defaultValue="Combine input and button" />
        <Button type="primary" style={{ height:'50px' }}>Submit</Button>
      </Space.Compact>
    </div>
  )
}
