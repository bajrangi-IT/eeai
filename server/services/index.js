const geminiService = require('./geminiService');
const googleServices = require('./googleServices');
const analyticsService = require('./analyticsService');
const logger = require('./logger');

/**
 * Central Service Registry for clean exports and better maintainability.
 */
module.exports = {
  geminiService,
  googleServices,
  analyticsService,
  logger
};
