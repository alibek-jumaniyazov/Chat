import React from 'react';
import { Input } from 'antd';

export default function SearchUser() {

    const { Search } = Input;

    const onSearch = (value, _e) => {
        if (value !== '') {
            console.log(value);
        };
    }
    return (
        <div className='SearchUser'>
            <h1 className='serachuserTitle'>Serach User</h1>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </div>
    )
}
