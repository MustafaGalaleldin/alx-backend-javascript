#!/usr/bin/node
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI with hooks', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" for 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" for 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
