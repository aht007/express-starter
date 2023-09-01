module.exports = (sequelize, Sequelize) => {
    const Demo = sequelize.define("demo", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        platform: {
            type: Sequelize.STRING
        },
    });

    return Demo;
};