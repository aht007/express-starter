module.exports = app => {
    const demo = require("../controllers/demo.controller.js");

    var router = require("express").Router();

    router.post("/", demo.create);

    router.get("/", demo.findAll);

    router.get("/:id", demo.findOne);

    app.use('/api/demo', router);
};