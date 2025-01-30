// const express = require('express');
// const cors = require('cors');
// const { Server } = require('socket.io');
// const mongoose = require('mongoose');
// const http = require('http');

// const app = express();
// app.use(cors());
// mongoose.connect('mongodb://localhost:27017/chat');

// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:5173', // Use http instead of https
//         methods: ["GET", "POST"]
//     }
// });

// io.on("connection", (socket) => {
//     console.log(`User connected: ${socket.id}`);

//     // Listen for messages from clients
//     socket.on("message", (data) => {
//         console.log(`Message from ${socket.id}:`, data);
//         // Broadcast the message to all clients, including the sender
//         io.emit("message", data);
//     });

//     // Handle disconnection
//     socket.on("disconnect", () => {
//         console.log(`User disconnected: ${socket.id}`);
//     });
// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const User = require('./Model/User'); // Import the User model

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chat')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

// Route for user registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, 'username'); // Fetch only usernames
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const server = http.createServer(app);
server.listen(5000, () => {
    console.log("Server is running on port 5000");
});