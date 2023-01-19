import Sequelize, { DataTypes } from "sequelize";

const user = (sequelize) => {
  const User = sequelize.define("users", {
    id: {
      // type: Sequelize.ARRAY(DataTypes.CHAR(9)),
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      validate: { isEmail: true },
    },
    verificationCode: {
      type: Sequelize.INTEGER,
    },
    verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    username: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    expirationDate: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    role: {
      type: Sequelize.ENUM("student", "faculty", "admin"),
    },
    secret: {
      type: Sequelize.STRING,
      defaulValue: "",
    },
  });

  return User;
};

export default user;
