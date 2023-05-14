const { authJwt } = require("../middleware");
const controller = require("../controllers/activity.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const auth = [authJwt.verifyToken];
    const endpoint = '/activities';

    app.post(endpoint, auth, controller.addActivity);
    app.get(endpoint, auth, controller.getActivities);
    app.get(endpoint + '/:id', auth, controller.getActivity);
    app.put(endpoint + '/:id', auth, controller.updateActivity);
    app.delete(endpoint + '/:id', auth, controller.deleteActivity);

};
