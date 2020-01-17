require('module-alias/register');

// const app = require('express');
const request = require('supertest');
const app = require('../../server');

// beforeAll(() => {
//   console.log("Starting TDD with JEST...");
// });

describe('Wardrobe Route', () => {
	it('returns status 200 from server', async () => {
		const response = await request(app).get('/');

		expect(response.status).toBe(200);
	});
});
