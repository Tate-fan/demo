'use strict';
const agent = require('supertest');
const assert = require('assert');
const app = require('../app/main');


describe('##/api/v1/ # home', function() {
  it('#Should alive', (done) => {
    agent(app)
    .get('/api/v1')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200, done);
  });
});
