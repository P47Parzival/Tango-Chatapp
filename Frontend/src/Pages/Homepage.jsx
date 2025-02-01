import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-center'>
                <h1 className='text-black pb-5'>Welcome to Tango-Chat, your one step application to chat across the world</h1>
                <Link to="/register">
                    <button className='h-20 pl-4 pr-4 border-solid border-2 rounded-3xl border-black bg-blue-500 text-white'>Start Chatting</button>
                </Link>
            </div>
        </div>
    )
}

export default Homepage
