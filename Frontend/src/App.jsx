// // // import React from 'react'
// // // import Homepage from './Pages/Homepage'
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Chat from './Pages/Chat';
// // // import Login from './Pages/signuppage';

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <Router>
// // //         <Routes>
// // //           <Route path='/' element={<Homepage />}></Route>
// // //           <Route path='/signup' element={<Login />}></Route>
// // //           <Route path='/chat' element={<Chat />}></Route>
// // //         </Routes>
// // //       </Router>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import Homepage from './Pages/Homepage';
// // import Chat from './Pages/Chat';
// // import Register from './Pages/signuppage';

// // const App = () => {
// //     const [loggedInUser, setLoggedInUser] = useState(null);

// //     return (
// //         <div>
// //             <Router>
// //                 <Routes>
// //                     <Route path="/" element={<Homepage />}
// //                     />
// //                     <Route
// //                         path="/register"
// //                         element={loggedInUser ? (<Navigate to="/chat" />) : (<Register onLogin={(username) => setLoggedInUser(username)} />)}
// //                     />
// //                     <Route
// //                         path="/chat"
// //                         element={loggedInUser ? (<Chat loggedInUser={loggedInUser} />) : (<Navigate to="/signup" />)}
// //                     />
// //                 </Routes>
// //             </Router>
// //         </div>
// //     );
// // };

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Homepage from './Pages/Homepage';
// import Chat from './Pages/Chatpage';
// import Register from './Pages/signuppage';
// import Login from './Pages/Loginpage';

// const App = () => {
//     const [loggedInUser, setLoggedInUser] = useState(null);

//     return (
//         <div>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Homepage />} />
//                     <Route
//                         path="/register"
//                         element={loggedInUser ? (<Navigate to="/chat" />) : (<Register onLogin={(username) => setLoggedInUser(username)} />)}
//                     />
//                     <Route
//                         path="/login"
//                         element={loggedInUser ? (<Navigate to="/chat" />) : (<Login onLogin={(username) => setLoggedInUser(username)} />)}
//                     />
//                     <Route
//                         path="/chat"
//                         element={loggedInUser ? (<Chat loggedInUser={loggedInUser} />) : (<Navigate to="/login" />)}
//                     />
//                 </Routes>
//             </Router>
//         </div>
//     );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chat from './Pages/Chatpage';
import Register from './Pages/signuppage';
import Login from './Pages/Loginpage';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [userAvatar, setUserAvatar] = useState(null);

    const handleLogin = (username, avatar) => {
        setLoggedInUser(username);
        setUserAvatar(avatar);
    };

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/register"
                        element={loggedInUser ? (<Navigate to="/chat" />) : (<Register onLogin={handleLogin} />)}
                    />
                    <Route
                        path="/login"
                        element={loggedInUser ? (<Navigate to="/chat" />) : (<Login onLogin={handleLogin} />)}
                    />
                    <Route
                        path="/chat"
                        element={loggedInUser ? (<Chat loggedInUser={loggedInUser} avatar={userAvatar} />) : (<Navigate to="/login" />)}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
