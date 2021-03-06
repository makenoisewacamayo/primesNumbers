process.env.NODE_ENV = 'test';

import chai from 'chai';
import eratosthenes from '../../../src/erastonenes/algoritm';

const { expect } = chai;
chai.should();

describe('The siege of Eratosthenes algorithm', () => {
  it('test algoritm with 15', () => {
    const output = eratosthenes(15);
    output.should.be.a('array');
    output.should.have.lengthOf(6);
    expect(output).to.deep.equal([13, 11, 7, 5, 3, 2]);
  });
});
