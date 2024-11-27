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
