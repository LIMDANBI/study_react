import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            });
    }, []); // 컴포넌트가 처음 실행될 때 한번만 데이터를 가져옴

    // 잘 들어갔는지 확인 , [users] -> users state가 변경될 때 마다 이부분 실행
    // useEffect(() => {
    //     console.log(users);
    // }, [users])

    return (
        <>
            <h1>Users</h1>
            {loading ? <Spinner /> : <UserList users={users} />}
        </>
    )
}
export default Users;