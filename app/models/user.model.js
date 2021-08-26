module.exports = (newSequelize, Sequelize) => {
    /*
    * Define our USER Model and required fields
    * */

    const User = newSequelize.define('user', {
        _id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        lastName: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        email: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            notEmpty: true,
        }
    });

    return User;
};
