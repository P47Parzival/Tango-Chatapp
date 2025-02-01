// import React from 'react'
// import Rightpart from '../components/Rightpart'
// import Leftpart from '../components/Leftpart'
// import { useState } from 'react'

// const Chat = ({ loggedInUser, avatar }) => {
//     const [selectedUser, setSelectedUser] = useState(null);

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold text-center">Tango Chat</h1>
//             <div className="flex items-center mt-4">
//                 <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
//                 <h1 className="text-lg flex justify-center">Welcome, {loggedInUser}!</h1>
//             </div>
//             <div className='pt-10 grid grid-cols-2 gap-4'>
//                 <Rightpart onUserSelect={(user) => setSelectedUser(user)} />
//                 <Leftpart selectedUser={selectedUser} />
//             </div>
//         </div>
//     );
// };

// export default Chat;

import React, { useState } from 'react';
import Rightpart from '../components/Rightpart';
import Leftpart from '../components/Leftpart';

const Chat = ({ loggedInUser, avatar }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center">Tango Chat</h1>
            <div className="flex items-center mt-4">
                <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
                <h1 className="text-lg flex justify-center">Welcome, {loggedInUser}!</h1>
            </div>
            <div className='pt-10 grid grid-cols-2 gap-4'>
                <Rightpart onUserSelect={(user) => setSelectedUser(user)} />
                <Leftpart selectedUser={selectedUser} loggedInUser={loggedInUser} />
            </div>
        </div>
    );
};

export default Chat;
