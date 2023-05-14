const { authJwt } = require("../middleware");
const controller = require("../controllers/exercise.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const auth = [authJwt.verifyToken];
    const endpoint = '/exercises';

    app.post(endpoint, auth, controller.addExercise);
    app.get(endpoint, auth, controller.getExercises);
    app.get(endpoint + '/:id', auth, controller.getExercise);
    app.put(endpoint + '/:id', auth, controller.updateExercise);
    app.delete(endpoint + '/:id', auth, controller.deleteExercise);

};
