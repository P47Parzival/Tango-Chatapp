import React from 'react';
import { useState, useEffect } from 'react';
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Leftbottom = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Listen for incoming messages
        socket.on("message", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        // Cleanup on unmount
        return () => {
            socket.off("message");
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            // Emit the message with a sender identifier (e.g., "me")
            const messageData = {
                text: message,
                sender: "me", // Indicates the message is sent by the current user
            };
            socket.emit("message", messageData);
            setMessage("");
        }
    };

    return (
        <div>
            <div className='pr-4 mt-2'>
                <div className='h-[450px] border-2 border-blue-500 overflow-y-auto p-2'>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 ${msg.sender === "me" ? "text-right" : "text-left"}`}
                        >
                            <span
                                className={`inline-block p-2 rounded ${
                                    msg.sender === "me"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-black"
                                }`}
                            >
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-2 flex justify-between pr-4'>
                <div>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-2 border-blue-500 focus:outline-none focus:ring-0 focus:border-red-600 h-8 w-full px-2"
                        type="text"
                        placeholder="Enter your message"
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send message on Enter key
                    />
                </div>
                <div className='flex justify-start space-x-2'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                    <button onClick={sendMessage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leftbottom;