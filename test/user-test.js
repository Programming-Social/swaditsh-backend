import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";

chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    describe('User test', () => {
        it('It should respond with the test phrase and a success field .', (done) => {
            chai.request(server)
                .post('/user/signup').send({
                    test: 'Test phrase'
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('string');
                    res.body.should.be.eql({
                        success: true,
                        message: 'Test passed successfully'
                    });
                    done(err);
                })
        })
    })
})