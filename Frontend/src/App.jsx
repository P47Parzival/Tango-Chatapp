// import React from 'react'
// import Homepage from './Pages/Homepage'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Chat from './Pages/Chat';
// import Login from './Pages/signuppage';

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Homepage />}></Route>
//           <Route path='/signup' element={<Login />}></Route>
//           <Route path='/chat' element={<Chat />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chat from './Pages/Chat';
import Login from './Pages/signuppage';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/signup"
                        element={
                            loggedInUser ? (
                                <Navigate to="/chat" /> // Redirect to chat if already logged in
                            ) : (
                                <Login onLogin={(username) => setLoggedInUser(username)} />
                            )
                        }
                    />
                    <Route
                        path="/chat"
                        element={
                            loggedInUser ? (
                                <Chat loggedInUser={loggedInUser} />
                            ) : (
                                <Navigate to="/signup" /> // Redirect to signup if not logged in
                            )
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
