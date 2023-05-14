
const db = require("../models");
const Activity = db.activity;

exports.addActivity = (req, res) => {
    const exerciseId = req.body.exerciseId;
    const sets = req.body.sets;
    const reps = req.body.reps;
    Activity.create({
        exerciseId: exerciseId,
        sets: sets,
        reps: reps,
    }).then(activity => {
        res.status(200).send("Activity Added Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
};

exports.getActivities = (req, res) => {
    Activity.findAll().then(activities => {
        res.status(200).send(activities ? activities : []);
    });
}

exports.getActivity = (req, res) => {
    const id = req.params.id;
    Activity.findByPk(id).then(activity => {
        res.status(200).send(activity ? activity : []);
    });
}

exports.updateActivity = (req, res) => {
    const id = req.params.id;
    const exerciseId = req.body.exerciseId;
    const sets = req.body.sets;
    const reps = req.body.reps;
    Activity.update({
        exerciseId: exerciseId,
        sets: sets,
        reps: reps,
    }, {
        where: {
            id: id
        }
    }).then(activity => {
        res.status(200).send("Activity Updated Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}

exports.deleteActivity = (req, res) => {
    const id = req.params.id;
    Activity.destroy({
        where: {
            id: id
        }
    }).then(activity => {
        res.status(200).send("Activity Deleted Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}


