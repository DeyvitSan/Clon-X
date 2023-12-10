'use client'
import '../style.css';
import Cardhome from '@/components/Cardhome';
import React, { useEffect, useState } from 'react';
import Nav from "@/components/Nav";
import LeftNav from "@/components/LeftNav";

async function fetchUsers() {
    try {
        const res = await fetch("https://reqres.in/api/users");
        const data = await res.json();
        if (Array.isArray(data.data)) {
            return data.data;
        } else {
            return [data.data];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

const MiPagina = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Nav />
            <div className="body">
                <div className="container">
                    <div className="left-div">
                        <LeftNav />
                    </div>
                    <div className="right-div">
                        <Cardhome users={users} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiPagina;
