import React, { useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
             });
    }, []); // 컴포넌트가 처음 실행될 때 한번만 데이터를 가져옴
    return (
        <h1>Users</h1>
    )
}
export default Users;