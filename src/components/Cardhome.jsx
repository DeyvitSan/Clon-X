import React from 'react';
import './styles.css';

export default function Cardhome({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <div className="card">
                        <h2>{user.id}</h2>
                        <h5>{user.first_name} {user.last_name}</h5>
                        <p>{user.email}</p>
                        <div className="contain_image">
                            <img src={user.avatar} alt={user.email}/>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
