const request = require('supertest');
const express = require('express');
const router = require('../routes/api');

// Mock services to test error handling
jest.mock('../services/geminiService', () => ({
  generateResponse: jest.fn().mockRejectedValue(new Error('API Down'))
}));

const app = express();
app.use(express.json());
app.use('/api', router);

describe('Resilience Testing', () => {
  it('should return a graceful fallback message when AI service fails', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ query: 'Hello' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.response).toContain('experiencing a high volume');
  });
});
