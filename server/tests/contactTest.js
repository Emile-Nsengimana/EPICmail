/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

chai.should();
chai.use(chaiHttp);

describe('Contact tests', () => {
  it('should be able to add a contact', (done) => {
    const contact = {
      id: 4,
      firstName: 'Mellisa',
      lastName: 'Nishimwe',
      email: 'mellisa@epicmail.rw',
    };
    chai.request(server)
      .post('/api/v1/contacts')
      .send(contact)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.statusCode).to.be.equal(200);
      });
    done();
  });

  it('should get all contacts', (done) => {
    chai.request(server)
      .get('/api/v1/contacts')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('Should get a specific contact', (done) => {
    chai.request(server)
      .get('/api/v1/contacts/emile@epicmail.rw')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should not be able to get unexisting contact', (done) => {
    chai.request(server)
      .get('/api/v1/contacts/nick')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
  it('should be able to remove a contact', (done) => {
    chai.request(server)
      .delete('/api/v1/contacts/emile@epicmail.rw')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should not be able to remove unexisting contact', (done) => {
    chai.request(server)
      .delete('/api/v1/contacts/Nicole')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
