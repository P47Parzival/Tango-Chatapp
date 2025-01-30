// // import React from 'react'
// // import Searchbar from './Searchbar'

// // const Rightpart = () => {
// //   return (
// //     <div>
// //       <h1 className='text-blue-500 text-center pb-5 font-mono font-semibold '>Your Recent Chats</h1>
// //         <Searchbar></Searchbar>
// //     </div>
// //   )
// // }

// // export default Rightpart

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Searchbar from './Searchbar';

// const Rightpart = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         // Fetch the list of users from the backend
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/users');
//                 setUsers(response.data);
//             } catch (err) {
//                 console.error('Error fetching users:', err);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div>
//             <h1 className='text-blue-500 text-center pb-5 font-mono font-semibold'>Users</h1>
//             <Searchbar />
//             <div className="mt-4">
//                 <ul>
//                     {users.map((user, index) => (
//                         <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
//                             {user.username}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Rightpart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';

const Rightpart = () => {
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
                        <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                            {user.username}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Rightpart;