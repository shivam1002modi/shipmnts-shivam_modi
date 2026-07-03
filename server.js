const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db'); 
const resourceRoutes = require('./routes/resource.routes');

const app = express();

// Global Middleware
app.use(morgan('dev')); 
app.use(express.json()); 

// Fire up database connection
connectDB(); 

// Mount generic api routes
app.use('/api/v1/resources', resourceRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Server is up and running smoothly!' });
});

// 404 Fallback Route
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint Not Found' });
});

// Listen on Localhost Loopback 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});