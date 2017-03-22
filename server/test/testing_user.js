'use strict'
const chai      = require('chai');
const chaiHttp  = require('chai-http');
const should    = chai.should();
chai.use(chaiHttp);

describe('Testing register new user', () => {
  it('should store new user to the database', (done) => {
    chai.request('http://localhost:3000')
      .post('/user/signup')
      .send({
        username: 'isumi',
        email: 'isumi@hacktiv8.com',
        password: '123'
      })
      .end((err, res) => {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

describe('Testing sign in user', () => {
  it('should log in and save data (username and password) to the database', (done) => {
    chai.request('http://localhost:3000')
      .post('/user/signin')
      .send({
        username: 'isumi',
        password: '123'
      })
      .end((err, res) => {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

describe('Testing get all user', () => {
  it('should return data users from database', (done) => {
    chai.request('http://localhost:3000')
      .get('/user')
      .send({
        username: 'isumi',
        password: '123'
      })
      .end((err, res) => {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

describe('Testing get a user', () => {
  let username = 'isumi'
  it('should return data one user from database', (done) => {
    chai.request('http://localhost:3000')
      .get('/user/'+username)
      .end((err, res) => {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('isumi')
        done();
      })
  })
})

describe('Testing update a user', () => {
  let username = 'isumi'
  it('should update data to the database', (done) => {
    chai.request('http://localhost:3000')
      .put('/user/'+username)
      .send({
        username: 'ina',
        email: 'isumi@hacktiv8.com',
        password: '123'
      })
      .end((err, res) => {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('ina');
        res.body.email.should.equal('isumi@hacktiv8.com');
        res.body.password.should.equal('123');
        done();
      })
  })
})

describe('Testing delete a user', () => {
  let username = 'ina'
  it('should delete a user to the database', (done) => {
    chai.request('http://localhost:3000')
      .delete('/user/'+username)
      .send({
        username: 'ina',
        email: 'isumi@hacktiv8.com',
        password: '123'
      })
      .end((err, res) => {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('ina');
        res.body.email.should.equal('isumi@hacktiv8.com');
        res.body.password.should.equal('123');
        done();
      })
  })
})
