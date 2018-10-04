var supertest = require('supertest');
const chai = require('chai');

// Create a new person
describe('PersonController.createPerson', () => {
    describe('#create()', function() {
        it('should create a new person', function(done) {
            supertest(sails.hooks.http.app)
            .post('/api/create')
            .send({
                "firstName": "Afroza",
                "lastName": "Tithi",
                "age": "23"
            })
            .expect(200)
            .expect(done);

            done();
        })
    })
})


// Update
describe('PersonController.updatePerson', () => {
    describe('#update()', function() {
        it('should update person data', function(done) {
            supertest(sails.hooks.http.app)
            .post('/api/update/:id')
            .send({
                "firstName": "Afroza",
                "lastName": "Tithi",
                "age": "23"
            })
            .expect(200)
            .expect(done);

            done();
        })
    })
})

// Get
describe('PersonController.getPerson', () => {
    describe('#get()', function() {
        it('should get all person data', function(done) {
            supertest(sails.hooks.http.app)
            .post('/api/get')
            .expect(200)
            .expect(done);

            done();
        })
    })
})

// Delete
describe('PersonController.deletePerson', () => {
    describe('#delete()', function() {
        it('should delete one person', function(done) {
            supertest(sails.hooks.http.app)
            .post('/api/delete/:id')
            .expect(200)
            .expect(done);

            done();
        })
    })
})