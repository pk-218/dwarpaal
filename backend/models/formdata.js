import Sequelize from "sequelize";

const formdata = (sequelize) => {
    const Form = sequelize.define("Forms", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      yearOfStudy: {
        type: Sequelize.STRING
      },
      profInCharge: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      domain: {
        type: Sequelize.STRING
      },
      n_gpu: {
        type: Sequelize.STRING
      },
      gpu_memory: {
        type: Sequelize.STRING
      },
      n_cpu: {
        type: Sequelize.STRING
      },
      n_cuda_cores: {
        type: Sequelize.STRING
      },
      n_tensor_cores: {
        type: Sequelize.STRING
      },
      system_memory: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      os_version: {
        type: Sequelize.STRING
      },
      dgx_drivers: {
        type: Sequelize.STRING
      },
      containers: {
        type: Sequelize.STRING
      },
      containers_version: {
        type: Sequelize.STRING
      },
      from_date: {
        type: Sequelize.STRING
      },
      to_date: {
        type: Sequelize.STRING
      },
      is_approved: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Form;
  };
  
  export default formdata;