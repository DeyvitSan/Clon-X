import React from 'react';
import './styles.css';


/*async function fetchUsers(){
    const res = await fetch("http://")
}*/
export default function Cardhome({ users }) {
    return (
        <div>
            {users.map((user) => (
                <div     key={user.id}>
                    <div className="card">
                            <h5 className="nombre_user">{user.first_name} {user.last_name}</h5>
                        <p>{user.email}</p>
                        <div className="contain_image">
                            <img className="img_card" src={user.avatar} alt={user.email}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
