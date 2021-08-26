module.exports = (app) => {
    /*
    * Require User controller
    * */
    const users = require('../controllers/user.contoller');

    /*
    * Require express Router
    * */
    let router = require('express').Router();

    /*
    * Create a new User
    * */
    router.post('/', users.create);

    /*
    * Create Bulk Users
    * */
    router.post('/json', users.createBulk);

    /*
    * Update User
    * */
    router.put('/:id', users.update);

    /*
    * Delete User
    * */
    router.delete('/:id', users.delete);

    /*
    * Delete All Users
    * */
    router.delete('/', users.deleteAll);

    /*
    * Find all Users by name
    * */
    router.get('/', users.findByName);

    /*
    * Find one user by id
    * */
    router.get('/:id', users.findById);

    app.use("/api/users", router);

};
