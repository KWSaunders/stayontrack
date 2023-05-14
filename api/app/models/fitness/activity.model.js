module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activities",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            workoutId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            exerciseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            sets: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            reps: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }
    );
    return Activity;
};