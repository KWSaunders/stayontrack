module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercises", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        muscle: {
            type: Sequelize.STRING,
        },
        videoUrl: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });

    return Exercise;
};
