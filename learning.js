const db = require('app/models');
const User = db.User;
const Op  = db.Sequelize.Op;


/*
* Creates User
* */

exports.create = (req, res) => {


    User.create().then(data => {

    }).catch(err => {

    })
};


exports.update = (req, res) => {

};


exports.delete = (req, res) => {


};




