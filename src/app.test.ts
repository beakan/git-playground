import request from 'supertest';

import { createServer } from './app';

// This is a test to make sure the server is running
describe('Testing Server', () => {
  it("GET: / should return 'Hello World!'", async () => {
    const app = await createServer();

    const res = await request(app).get('/');

    expect(res.body.data).toBe('Hello World!');
  });
});
