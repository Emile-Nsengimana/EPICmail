/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

chai.should();
chai.use(chaiHttp);

describe('Message tests', () => {
  it('should be able to add a message', (done) => {
    const message = {
      messageId: 1,
      createdOn: '12-03-2019',
      subject: 'Final year report',
      message: 'The final report will be available next week',
      parentMessageId: 2,
      status: 'unread',
    };
    chai.request(server)
      .post('/api/v1/messages')
      .send(message)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.statusCode).to.be.equal(201);
        res.body.data.should.have.property('messageId');
        res.body.data.should.have.property('createdOn');
        res.body.data.should.have.property('subject');
        res.body.data.should.have.property('message');
        res.body.data.should.have.property('parentMessageId');
        res.body.data.should.have.property('status');
      });
    done();
  });

  it('should not be able to add an invalid message info', (done) => {
    const message = {
      messageId: 1,
      subject: 'Final year report',
      message: 'The final report will be available next week',
      parentMessageId: '2',
    };
    chai.request(server)
      .post('/api/v1/messages')
      .send(message)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.statusCode).to.be.equal(400);
        res.body.data.should.be.a('string');
      });
    done();
  });
  it('should get all messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
  it('Should be able to see all read messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/read')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
  it('Should be able to see all unread messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/unread')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to remove unexisting message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/99')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to remove a message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/1')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        done();
      });
  });
  it('should be able to display inbox messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/inbox/1')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should not be able to display inbox messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/inbox/99')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        res.body.message.should.be.equal('no inbox messages for the user with that id');
        done();
      });
  });
  it('should be able to display sent messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/sent/1')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should not be able to display sent messages for unkwon user', (done) => {
    chai.request(server)
      .get('/api/v1/messages/sent/99')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        res.body.message.should.be.equal('no messages sent for the user with that id');
        done();
      });
  });
});
