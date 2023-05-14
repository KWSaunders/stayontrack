const { authJwt } = require("../middleware");
const controller = require("../controllers/program.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const auth = [authJwt.verifyToken];
    const endpoint = '/programs';

    app.post(endpoint, auth, controller.addProgram);
    app.get(endpoint, auth, controller.getPrograms);
    app.get(endpoint + '/:id', auth, controller.getProgram);
    app.put(endpoint + '/:id', auth, controller.updateProgram);
    app.delete(endpoint + '/:id', auth, controller.deleteProgram);

};
