module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        _id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.STRING,
        }
    });

    return User;
};
