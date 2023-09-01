const db = require("../models");
const Demo = db.demo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const demo = {
        title: req.body.title,
        description: req.body.description,
        platform: req.body.platform
    };

    Demo.create(demo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Demo."
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Demo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Demos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Demo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Demo with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving Demo with id=" + id
            });
        });
};
