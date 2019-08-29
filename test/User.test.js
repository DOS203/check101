const chai = require('chai');
const expect = chai.expect;

const take = require('../models/User');

describe('User model', ()=> {
    it('should return error is required areas are missing', (done) =>{
        let one = new take();

        one.validate((err)=> {
            expect(err.errors.firstname).to.exist;
            expect(err.errors.lastname).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.password).to.exist;
        

            

            done();

        })
    })
})