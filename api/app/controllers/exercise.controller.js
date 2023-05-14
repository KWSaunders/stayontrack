const db = require("../models");
const Exercise = db.exercise;

exports.addExercise = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const muscleGroupIds = req.body.muscleGroupIds;
    const videoUrl = req.body.videoUrl;
    Exercise.create({
        id: id,
        name: name,
        muscleGroupIds: muscleGroupIds,
        videoUrl: videoUrl,
    }).then(exercise => {
        res.status(200).send("Exercise Added Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}

exports.getExercises = (req, res) => {
    Exercise.findAll().then(exercises => {
        res.status(200).send(exercises ? exercises : []);
    });
}

exports.getExercise = (req, res) => {
    const id = req.params.id;
    Exercise.findByPk(id).then(exercise => {
        res.status(200).send(exercise ? exercise : []);
    });
}

exports.updateExercise = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const muscleGroupIds = req.body.muscleGroupIds;
    const videoUrl = req.body.videoUrl;
    Exercise.update({
        name: name,
        muscleGroupIds: muscleGroupIds,
        videoUrl: videoUrl,
    }, {
        where: {
            id: id
        }
    }).then(exercise => {
        res.status(200).send("Exercise Updated Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}

exports.deleteExercise = (req, res) => {
    const id = req.params.id;
    Exercise.destroy({
        where: {
            id: id
        }
    }).then(exercise => {
        res.status(200).send("Exercise Deleted Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}