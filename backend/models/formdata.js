import Sequelize from "sequelize";

const formdata = (sequelize) => {
    const Form = sequelize.define("Forms", {
      id: {
        type: Sequelize.INTEGER  
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  
  export default user;