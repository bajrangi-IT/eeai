const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

/**
 * Root Router - Orchestrates all API versions and health checks.
 */

// Health Check for Vercel/Evaluation
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Aggregate API Routes
router.use('/', apiRoutes);

module.exports = router;
