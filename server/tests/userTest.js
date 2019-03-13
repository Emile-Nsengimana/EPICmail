/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

chai.should();
chai.use(chaiHttp);

describe('User tests', () => {
  it('should be able to add a user', (done) => {
    const user = {
      firstName: 'Peter',
      lastName: 'Mark',
      email: 'pete@epicmail.rw',
      password: 'password',
      phoneNo: '0781234567',
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.statusCode).to.be.equal(201);
      });
    done();
  });

  it('should get all users', (done) => {
    chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('Should get a specific user', (done) => {
    chai.request(server)
      .get('/api/v1/users/emile@epicmail.rw')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
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
