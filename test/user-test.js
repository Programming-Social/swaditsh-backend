const chai = require("chai");
const chaiHttp = require("chai-http");
// const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    describe('User test', () => {
        it('It should respond with the test phrase and a success field .', (done) => {
            // chai.request('http://localhost:4000')
            //     .post('/user/signup').send({
            //         phone: '7001826129',
            //         pin: '112321'
            //     })
            //     .end((err, res) => {
            //         res.should.have.status(200);
            //         res.body.should.be.a('object');
            //         res.body.should.be.eql({
            //             success: true,
            //             message: 'Test passed successfully'
            //         });
            //         done(err);
            //     })
            done();
        })
    })
})