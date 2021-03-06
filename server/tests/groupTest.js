/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

chai.should();
chai.use(chaiHttp);

describe('Group tests', () => {
  it('should be able to create a group', (done) => {
    const newGroup = {
      groupId: 4,
      groupName: 'group 4',
    };
    chai.request(server)
      .post('/api/v1/groups')
      .send(newGroup)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.statusCode).to.be.equal(201);
        res.body.data.should.have.property('groupId');
        res.body.data.should.have.property('groupName');
      });
    done();
  });
  it('should be able to display all groups', (done) => {
    chai.request(server)
      .get('/api/v1/groups')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should be able to display a specified group name', (done) => {
    chai.request(server)
      .get('/api/v1/groups/Group 1')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should not be able to display unexisting group', (done) => {
    chai.request(server)
      .get('/api/v1/groups/Group 99')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should be able to remove a group', (done) => {
    chai.request(server)
      .delete('/api/v1/groups/Group 1')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should not be able to remove unexisting group', (done) => {
    chai.request(server)
      .delete('/api/v1/groups/Group 10')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
