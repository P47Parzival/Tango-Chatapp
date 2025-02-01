import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';

const Rightpart = ({ onUserSelect }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch the list of users from the backend
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching users:', err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1 className='text-blue-500 text-center pb-5 font-mono font-semibold'>Users</h1>
            <Searchbar />
            <div className="mt-4">
                <ul>
                    {users.map((user, index) => (
                        <li
                            key={index}
                            className="p-2 flex justify-start gap-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => onUserSelect(user)} // Pass the selected user data
                        >
                            <img src={user.avatar} alt="" className="w-10 h-10 rounded-full" />
                            <span className='pt-2'>{user.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Rightpart;
