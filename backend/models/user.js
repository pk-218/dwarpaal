import Sequelize from "sequelize";

const user = (sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING
      },
      verificationCode: {
        type: Sequelize.INTEGER
      },
      verifed:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    });
  
    return User;
  };
  
  export default user;