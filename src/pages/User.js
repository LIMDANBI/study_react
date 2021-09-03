import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    // console.log(id);
    console.log(user);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id ) // 한명의 user 정보를 받아옴 
            .then(response => {
                setUser(response.data);
                setLoading(false);
            });
    }, []); // 컴포넌트가 처음 실행될 때 한번만 데이터를 가져옴

    // 잘 들어갔는지 확인 , [users] -> users state가 변경될 때 마다 이부분 실행
    // useEffect(() => {
    //     console.log(users);
    // }, [users])

    return (
        <>
            <h1>User 정보</h1>
            {loading ? <Spinner /> : null }
        </>
    )
}
export default User;