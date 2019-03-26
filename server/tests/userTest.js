/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import uuidv1 from 'uuid/v1';
import server from '../../server';

chai.use(chaiHttp);

describe('User tests', () => {
  it('should be able to add a user', (done) => {
    const user = {
      userId: uuidv1(),
      firstName: 'Peter',
      lastName: 'Mark',
      email: 'pete@epicmail.rw',
      password: 'password',
      phoneNo: 781234567,
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(201);
        res.body.data.should.have.property('userId');
        res.body.data.should.have.property('firstName');
        res.body.data.should.have.property('lastName');
        res.body.data.should.have.property('email');
        res.body.data.should.have.property('password');
      });
    done();
  });
  it('should not add a user with used email address', (done) => {
    const user = {
      userId: uuidv1(),
      firstName: 'Peter',
      lastName: 'Mark',
      email: 'pete@epicmail.rw',
      password: 'password',
      phoneNo: 781234567,
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        res.body.message.should.be.equal('email address already used, please try another one');
      });
    done();
  });
  it('should not add a user with an invalid phone number', (done) => {
    const user = {
      userId: uuidv1(),
      firstName: 'Peter',
      lastName: 'Zack',
      email: 'peteui@epicmail.rw',
      password: 'password',
      phoneNo: '000',
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        res.body.message.should.be.equal('invalid phone number');
      });
    done();
  });
  it('should not add a user with any invalid informations', (done) => {
    const user = {
      userId: uuidv1(),
      firstName: 'Peter@',
      lastName: 'Mark',
      email: 'peteuiz@epicmail.rw',
      password: 'password',
      phoneNo: 1234567891,
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        res.body.message.should.be.a('string');
      });
    done();
  });
  it('should get all users', (done) => {
    chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
  it('Should get a specific user', (done) => {
    chai.request(server)
      .get('/api/v1/users/emile@epicmail.rw')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
  it('should not be able to get unexisting user', (done) => {
    chai.request(server)
      .get('/api/v1/users/abc@epicmail.rw')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
  it('should be able to remove a user', (done) => {
    chai.request(server)
      .delete('/api/v1/users/fred@epicmail.rw')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        res.body.info.should.be.a('string');
        done();
      });
  });
  it('should not be able to remove unexisting user', (done) => {
    chai.request(server)
      .delete('/api/v1/users/abc@epicmail.rw')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
