// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Register = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:5000/register', {
//                 username,
//                 password,
//             });
//             alert(response.data.message);
//             onLogin(username); // Notify the parent component that the user has logged in
//             navigate('/chat'); // Redirect to the chat page
//         } catch (err) {
//             alert(err.response?.data?.message || 'Registration failed');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">Register</h2>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium mb-1">Name</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium mb-1">Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                     Register
//                 </button>
//                 <p className='pt-2'>Already registered? <Link to="/login" className='text-blue-400'>Click here</Link></p>
//             </form>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Predefined list of avatar URLs
const avatars = [
    'https://github.com/P47Parzival/Tango-Chatapp/blob/main/Frontend/src/assests/face.png?raw=true',
    'https://github.com/P47Parzival/Tango-Chatapp/blob/main/Frontend/src/assests/face%20(1).png?raw=true',
    'https://github.com/P47Parzival/Tango-Chatapp/blob/main/Frontend/src/assests/face%20(2).png?raw=true',
    'https://github.com/P47Parzival/Tango-Chatapp/blob/main/Frontend/src/assests/face%20(3).png?raw=true',
    'https://github.com/P47Parzival/Tango-Chatapp/blob/main/Frontend/src/assests/face%20(5).png?raw=true',
    'https://github.com/P47Parzival/Tango-Chatapp/blob/main/Frontend/src/assests/face%20(6).png?raw=true',
];

const Register = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]); // Default avatar
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                password,
                avatar: selectedAvatar, // Include the selected avatar
            });
            alert(response.data.message);
            onLogin(username, selectedAvatar); // Notify the parent component with username and avatar
            navigate('/chat'); // Redirect to the chat page
        } catch (err) {
            alert(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4 pt-2">
                    <label className="block text-sm font-medium mb-1">Choose Avatar</label>
                    <div className="flex space-x-2">
                        {avatars.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                className={`w-10 h-10 rounded-full cursor-pointer border-2 ${selectedAvatar === avatar ? 'border-blue-500' : 'border-transparent'}`}
                                onClick={() => setSelectedAvatar(avatar)}
                            />
                        ))}
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
                <p>Already registered? <Link to="/login" className='text-blue-400'>Click here</Link></p>
            </form>
        </div>
    );
};

export default Register;
