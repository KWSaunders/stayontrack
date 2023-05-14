const db = require("../models");
const Program = db.program;

// Future: store authorId
exports.addProgram = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const workoutIds = req.body.workoutIds;
    Program.create({
        name: name,
        description: description,
        workoutIds: workoutIds,
    }).then(program => {
        res.status(200).send("Program Added Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    })

}

exports.getPrograms = (req, res) => {
    Program.findAll().then(programs => {
        res.status(200).send(programs ? programs : []);
    });
}

exports.getProgram = (req, res) => {
    const id = req.params.id;
    Program.findByPk(id).then(program => {
        res.status(200).send(program ? program : []);
    });
}

exports.updateProgram = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const workoutIds = req.body.workoutIds;
    Program.update({
        name: name,
        description: description,
        workoutIds: workoutIds,
    }, {
        where: {
            id: id
        }
    }).then(program => {
        res.status(200).send("Program Updated Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}

exports.deleteProgram = (req, res) => {
    const id = req.params.id;
    Program.destroy({
        where: {
            id: id
        }
    }).then(program => {
        res.status(200).send("Program Deleted Successfully!");
    }).catch(err => {
        console.log("Error: " + err.message);
        res.status(500).send({ message: err.message });
    });
}