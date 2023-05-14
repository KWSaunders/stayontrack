module.exports = (sequelize, Sequelize) => {
    const Program = sequelize.define("programs",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
        },
        {
            sequelize,
            timestamps: true,
        },
    );

    return Program;
};
