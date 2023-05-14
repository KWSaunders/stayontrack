module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    workoutId: {
      type: Sequelize.INTEGER
    },
    workouts: {
      type: Sequelize.JSON
    }
  });

  return User;
};
