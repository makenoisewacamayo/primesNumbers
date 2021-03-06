process.env.NODE_ENV = 'test';
process.env.SERVER_PORT = '3002';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/index';

chai.should();
const { expect } = chai;
chai.use(chaiHttp);

describe('should test api', () => {
  after(() => {
    server.close();
  });

  it('it should throw an error for any route', done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });

  it('it should get error if parameter is not a number', done => {
    chai
      .request(server)
      .get('/prime_number/dada')
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });

  it('it should get primes numbers below 15', done => {
    chai
      .request(server)
      .get('/prime_number/15')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        expect(res.body).to.deep.equal([13, 11, 7, 5, 3, 2]);
        done();
      });
  });
});
