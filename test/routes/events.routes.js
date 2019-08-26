import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import events from '../mocks/events.mock';

const { expect } = chai;
chai.use(chaiHttp);

const baseURI = '/api/v1/';
const { validEvent } = events;

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

describe('Create events', () => {
  it('should create an event', (done) => {
    chai
      .request(app)
      .post(`${baseURI}/events`)
      .send(validEvent)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('title');
        expect(res.body.data).to.have.property('description');
        expect(res.body.data).to.have.property('location');
        expect(res.body.data).to.have.property('date');
        done(err);
      });
  });
});
