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
      id: 1,
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
        chai.expect(res.statusCode).to.be.equal(200);
      });
    done();
  });

  it('should get all messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  it('Should be able to see all read messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/read')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
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
      .get('/api/v1/messages/99')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
//   it('should be able to remove a message', (done) => {
//     chai.request(server)
//       .get('/api/v1/messages/1')
//       .end((err, res) => {
//         chai.expect(res.statusCode).to.be.equal(200);
//         done();
//       });
//   });
});
