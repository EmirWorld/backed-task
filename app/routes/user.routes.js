module.exports = app => {

    /*
    * Creating ORM routes and relation ships
    * */

    const users = require("../controllers/user.contoller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    // Create a new Users
    router.post("/json", users.bulkCreate);

    // Retrieve all Users
    router.get("/", users.findAll);

    // Retrieve a single User with id
    router.get("/:id", users.findOne);


    // Update a Users with id
    router.put("/:id", users.update);

    // Delete a User with id
    router.delete("/:id", users.delete);

    // Delete all Users
    router.delete("/", users.deleteAll);

    app.use("/api/users", router);
};
