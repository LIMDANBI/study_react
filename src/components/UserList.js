import React from 'react';
import {Link} from 'react-router-dom';

const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return (
                    <div className="card mb-2" key={user.id}>
                        <div className="card-body p-3">
                            {/* ``으로 감싸주면 안에서 변수 사용 가능  */}
                            <Link to={`/users/${user.id}`}> {user.name} </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserList;