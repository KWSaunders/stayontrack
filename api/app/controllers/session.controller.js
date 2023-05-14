
const db = require("../models");
const User = db.user;
const Set = db.set;
const Workout = db.workout;

// addSet 2
exports.addSet2 = (req, res) => {
    const weight = req.body.weight;
    const reps = req.body.reps;
    const exercise = req.body.exercise;

    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        console.log("Adding set for username: " + user.username);
        Set.create({
            userId: req.userId,
            workoutId: user.workoutId,
            name: exercise,
            weight: weight,
            reps: reps,
        }).then(set => {
            res.status(200).send("Set Added Successfully!");
        }
        ).catch(err => {
            console.log("Error: " + err.message);
            res.status(500).send({ message: err.message });
        }
        );
    });
};
// getSets 2
exports.getSets2 = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);
        const workoutId = user.workoutId;
        Set.findAll({
            where: {
                userId: req.userId,
                workoutId: workoutId
            }
        }).then(sets => {
            res.status(200).send(sets ? sets : []);
        });
    });
};

exports.getWorkouts = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);

        Workout.findAll({
            where: {
                userId: req.userId,
            }
        }).then(workouts => {
            // get all sets for each workout
            Set.findAll({
                where: {
                    userId: req.userId,
                }
            }).then(sets => {
                let workoutsCpy = [];
                // add sets to each workout
                workouts.forEach(workout => {

                    let sts = sets.filter(set => set.workoutId === workout.workoutId);
                    let wrkout = { id: workout.id, workoutId: workout.workoutId, createdAt: workout.createdAt, name: workout.name, sets: sts };
                    workoutsCpy.push(wrkout);
                });

                // console.log('SET: ' + JSON.stringify(workoutsCpy[0].sets));

                console.log('WORKOUTS!!!!');
                console.log(JSON.stringify(workoutsCpy));

                res.status(200).send(workoutsCpy ? workoutsCpy : []);
            })
        });
    });
};


exports.getWorkoutId = (req, res) => {
    User.findOne({
        where: {
            // username: req.body.username
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);
        const workoutId = user.workoutId;
        console.log('workout Id from db: ' + workoutId);
        res.status(200).send("" + workoutId);
    });
}

exports.complete = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        Workout.create({
            userId: req.userId,
            workoutId: user.workoutId,
            name: req.body.name,
        }).then(workout => {
            console.log("Workout created: " + workout);
            user.workoutId = user.workoutId + 1;
            user.save();
            res.status(200).send("Workout Session Completed!");
        }).catch(err => {
            console.log("Error: " + err.message);
            res.status(500).send({ message: err.message });
        });
    });
}