/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createPerson: function(req, res) {
        let firstName = req.param('firstName'),
            lastName = req.param('lastName'),
            age = req.param('age');

        var person = Person.create({
            firstName: firstName,
            lastName: lastName,
            age: age
        });

        person.exec(function(err, success) {

            if(err) {
                res.staus(500);
                return res.view('500', {data: err});
            }

            return res.json(success);
        });

    },


    getPerson: function(req, res) {
        
        let person = Person.find();

        person.exec(function(err, success) {

            if(err) {
                res.status(500);
                return res.view('500', {data: err});
            }

            res.json(success)
        })
    },


    updatePerson: function(req, res) {

        let data = req.body;
        let id = req.param('id');

        let updtePerson = Person.update({ id: id }).set(data).fetch();

        sails.log(updtePerson);

        return res.ok();
    },

    deletePerson: function(req, res) {

        let id = req.param('id');

        Person.destroy({ id: id }).fetch();
        
        return res.ok();
    }
};