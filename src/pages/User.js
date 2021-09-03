import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 
    // console.log(id);
    // console.log(user);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/'+id) // 한명의 user 정보를 받아옴 
            .then(response => {
                setUser(response.data);
                setLoading(false);
            });
    }, []); // 컴포넌트가 처음 실행될 때 한번만 데이터를 가져옴

    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return (
        <>
            <h1>User 정보</h1>
            {userDetail}
        </>
    )
}
export default User;