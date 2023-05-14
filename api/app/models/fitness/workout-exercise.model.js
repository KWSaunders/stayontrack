const Sequelize = require('sequelize');
const sequelize = new Sequelize('your-database-name', 'your-username', 'your-password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Workout = require('./workout.model');
const Exercise = require('./exercise.model');

const WorkoutExercise = sequelize.define('Workout_Exercise', {
    // no attributes needed for the link table
});

Workout.belongsToMany(Exercise, { through: WorkoutExercise });
Exercise.belongsToMany(Workout, { through: WorkoutExercise });

module.exports = WorkoutExercise;
