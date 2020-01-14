require('module-alias/register');

const app = require('express');
const request = require('supertest');
const wardrobe = require('@models').wardrobe;
// const wardrobe = require('@routes/wardrobe');

// beforeAll(() => {
//   console.log("Starting TDD with JEST...");
// });

// describe('To run test file', () => {
// 	it('this test has been built', () => {
// 		expect(true).toBe(true);
// 	});
// });

describe('Wardrobe Route', () => {
	it('returns status 200 from server', () => {
		request(app)
			.get('/wardrobe')
			.then(res => {
				expect(res.statusCode.toBe(200));
			});
	});
});
