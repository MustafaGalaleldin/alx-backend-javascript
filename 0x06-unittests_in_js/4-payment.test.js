#!/usr/bin/node
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI with stubs', () => {
  it('should stub calculateNumber and verify arguments and console log', () => {
    const calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToAPI(100, 20);

    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateStub.restore();
    consoleSpy.restore();
  });
});
