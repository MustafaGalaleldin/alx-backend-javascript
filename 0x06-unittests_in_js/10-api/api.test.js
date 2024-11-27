#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct message and status code for /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return payment methods for valid cart ID', (done) => {
    request.get(`${baseUrl}/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid cart ID', (done) => {
    request.get(`${baseUrl}/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', () => {
  const baseUrl = 'http://localhost:7865/available_payments';

  it('should return the correct payment methods', (done) => {
    request.get(baseUrl, (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});

describe('Login Page', () => {
  const baseUrl = 'http://localhost:7865/login';

  it('should return welcome message for valid username', (done) => {
    const options = {
      url: baseUrl,
      method: 'POST',
      json: true,
      body: { userName: 'Betty' },
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return 400 for missing username', (done) => {
    const options = {
      url: baseUrl,
      method: 'POST',
      json: true,
      body: {},
    };
    request(options, (error, response) => {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });
});
