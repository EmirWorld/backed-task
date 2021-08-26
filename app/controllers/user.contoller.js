/*
* Require database connections from models
* */
const db = require('../models');

/*
* Require User Model from Database
* */
const User = db.users;

/*
* Require Model Querying from Sequelize ORM
* */
const Op = db.Sequelize.Op;

/*
* Create User
* */
exports.create = (req, res) => {
    /*
    * Validate requested fields
    * */
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phoneNumber) {
        res.status(400).send({
            message: "Fields cannot be blank"
        });
    }

    /*
    * Create User Model
    * */

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    };

    /*
    * Save User to database
    * */

    User.create(user)
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some Error occurred while creating the user",
            })
        })

};


/*
* Create Users
* */
exports.createBulk = (req, res) => {

    /*
    * Save one or more Users in database
    * */

    User.createBulk(req.body, {
        validate: true,
        fields: [
            '_id',
            'firstName',
            'lastName',
            'email',
            'phoneNumber'
        ],
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error Occurred while creating the User."
            })
        });
};

/*
* Update User
* */
exports.update = (req, res) => {
    const id = req.body.id

    /*
    * Update User in Database
    * */
    User.update(req.body, {
        where: {_id: id},
    })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'User was updated successfully'
                });
            } else {
                res.send({
                    message: "Cannot update user"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error Occurred while updating the User with id=" + id,
            })
        })


};

/*
* Delete User
* */
exports.delete = (req, res) => {
    const id = req.params.id;

    /*
    * Delete User from Database
    * */
    User.destroy({
        where: {_id: id}
    })
        .then(data => {

            if (data === 1) {
                res.send({
                    message: "User was deleted successfully!",

                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete User with id=" + id
            });
        });
};

/*
* Delete all Users
* */
exports.deleteAll = (req, res) => {

    /*
    * Delete all Users from Database
    * */
    User.destroy({
        where: {},
        truncate: false
    })
        .then(data => {
            res.send({message: `${data} Users were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};

/*
* Find User by ID
* */
exports.findById = (req, res) => {
    const id = req.params.id;


    /*
    * Find User by ID from database
    * */
    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

/*
* Find all Users by name
* */
exports.findByName = (req, res) => {
    const firstName = req.query.firstName;

    /*
    * Query Condition
    * */
    let condition = firstName ? {firstName: {[Op.iLike]: `%${firstName}%`}} : null;

    /*
    * Find all Users by name from database
    * */
    User.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
