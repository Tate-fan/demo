'use strict'
/* global describe it */
const agent = require('supertest')
const assert = require('assert')
const app = require('../../src/app')

describe('##/api/v1/', () => {
  it('#home', (done) => {
    agent(app)
    .get('/api/v1')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .then((res) => {
      assert(res.body['version'], '1.0.0')
      done()
    })
  })
})
