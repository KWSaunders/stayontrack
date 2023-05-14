module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define("workouts", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        // activityIds: {
        //     type: Sequelize.ARRAY(Sequelize.INTEGER),
        // }
    });

    return Workout;
};