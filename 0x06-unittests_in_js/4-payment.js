#!/usr/bin/node
// db.js (Simulating a database module)
module.exports = {
    getUserById: (id) => {
      // Imagine this function connects to a database
      return { id, name: 'John Doe' };
    },
  };
  