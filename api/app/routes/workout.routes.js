const { authJwt } = require("../middleware");
const controller = require("../controllers/workout.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const auth = [authJwt.verifyToken];
    const endpoint = '/workouts';

    app.post(endpoint, auth, controller.addWorkout);
    app.get(endpoint, auth, controller.getWorkouts);
    app.get(endpoint + '/:id', auth, controller.getWorkout);
    app.put(endpoint + '/:id', auth, controller.updateWorkout);
    app.delete(endpoint + '/:id', auth, controller.deleteWorkout);

};
