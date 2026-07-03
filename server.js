const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db'); 
// const createUserRoutes = require('./routes/shipment.routes');
const app = express();

// Global Middleware
app.use(morgan('dev')); 
app.use(express.json()); 

// Fire up database connection
if (connectDB()) 
// Mount generic api routes
app.use('/api/v1/users',require('./routes/shipment.routes'));



// 404 Fallback Route
app.use((req, res) => {
    console.log(`404 Not Found: ${req.originalUrl}`);
    res.status(404).json({ error: 'Endpoint Not Found' });
    
});

// Listen on Localhost Loopback 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
