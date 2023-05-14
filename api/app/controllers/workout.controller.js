const db = require("../models");
const Workout = db.workout;
const WorkoutExercise = db.workoutExercise;

exports.addWorkout = (req, res) => {
    const name = req.body.name;
    const activityIds = req.body.activityIds;
    Workout.create({
        name: name,
        activityIds: activityIds,
    }).then(workout => {
        res.status(200).send("Workout Added Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    })
}

exports.getWorkouts = (req, res) => {
    Workout.findAll().then(workouts => {
        res.status(200).send(workouts ? workouts : []);
    });
}

exports.getWorkout = (req, res) => {
    const id = req.params.id;
    Workout.findByPk(id).then(workout => {
        WorkoutExercise.findAll({
            where: {
                workoutId: id
            }
        }).then(workoutExercises => {
            // workout.dataValues.workoutExercises = workoutExercises;
            workout.exercises = workoutExercises;
            res.status(200).send(workout ? workout : []);
        });
    });
}
exports.updateWorkout = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const activityIds = req.body.activityIds;
    Workout.update({
        name: name,
        activityIds: activityIds,
    }, {
        where: {
            id: id
        }
    }).then(workout => {
        res.status(200).send("Workout Updated Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}

exports.deleteWorkout = (req, res) => {
    const id = req.params.id;
    Workout.destroy({
        where: {
            id: id
        }
    }).then(workout => {
        res.status(200).send("Workout Deleted Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}