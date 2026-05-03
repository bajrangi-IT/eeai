/**
 * Application Constants and Configurations.
 * Centralized for easy maintenance and to avoid magic strings.
 */
const CONFIG = {
  API_VERSION: 'v1.0.0',
  CACHE_TTL: 3600, // 1 hour in seconds
  MAX_QUERY_LENGTH: 500,
  DEFAULT_LANGUAGE: 'en',
  MODELS: {
    PRIMARY: 'gemini-2.0-flash',
    SECONDARY: 'gemini-2.5-flash',
    FALLBACK: 'gemini-1.5-flash'
  },
  MESSAGES: {
    STARTUP: 'EleEdu AI Engine initialized successfully.',
    AI_ERROR: "I'm currently experiencing a high volume of requests. Please try again shortly.",
    VALIDATION_ERROR: 'Invalid request parameters provided.'
  }
};

module.exports = CONFIG;
