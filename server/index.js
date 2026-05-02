const express = require('express');
const cors = require('cors');
const compression = require('compression');
const SecurityMiddleware = require('./middleware/security');
const { logger } = require('./services');
const { initializeFirebase } = require('./config/firebase');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Professional Orchestration
try {
  initializeFirebase();
  logger.info('System initialized with native resilience.');
} catch (err) {
  console.error('System Initialization Warning:', err.message);
}

const app = express();
app.use(compression()); 

// Apply Robust Security Suite
SecurityMiddleware.apply(app);

app.use(cors({
  origin: true,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json({ limit: '50kb' }));

// Professional Request Logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Advanced Rate Limiting for Security
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: { error: 'Too many requests from this IP, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Election Assistant API is running' });
});

// Start Server
if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  server.on('error', (error) => {
    console.error('Server error:', error);
  });
}

module.exports = app;
