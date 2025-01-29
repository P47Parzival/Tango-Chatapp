import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Pages/Chat';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
