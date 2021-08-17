module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        _id: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.BOOLEAN
        },
        email:{
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        }
    });

    return User;
};
