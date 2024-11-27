#!/usr/bin/node
const sinon = require('sinon');
const { expect } = require('chai');
const db = require('./db');

describe('Stub example', () => {
  it('should stub getUserById to return a specific value', () => {
    const stub = sinon.stub(db, 'getUserById').returns({ id: 1, name: 'Jane Doe' });

    const user = db.getUserById(1);
    expect(user).to.deep.equal({ id: 1, name: 'Jane Doe' });

    // Restore the original function
    stub.restore();
  });
});
