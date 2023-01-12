
import Sequelize from "sequelize";
import user from "../models/user.js";
import role from "../models/role.js";

const sequelize = new Sequelize(
  "dwarpalDB",
  "postgres",
  "Password",
  {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize, Sequelize);
db.role = role(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["student", "faculty", "admin"];

function initial() {
    db.role.create({
      id: 1,
      name: "student"
    });
   
    db.role.create({
      id: 2,
      name: "faculty"
    });
   
    db.role.create({
      id: 3,
      name: "admin"
    });
  }

const initPostgresDB = () => {
    db.sequelize.sync({force: true}).then(() => {
        console.log('Drop and Resync Database with { force: true }');
        initial();
    });
}
  

export default initPostgresDB;
