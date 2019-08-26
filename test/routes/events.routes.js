import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index';

const { expect } = chai;
chai.use(chaiHttp);

const baseURI = '/api/v1/';

describe('Get Events', () => {
  context('Retrieve all events', () => {
    it('should return all events in DB', (done) => {
      chai
        .request(app)
        .get(`${baseURI}/events`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.eql('success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.be.an('array');
          done(err);
        });
    });
  });
});
