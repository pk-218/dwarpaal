
import Sequelize from "sequelize";
import user from "../models/user.js";
import role from "../models/role.js";

const sequelize = new Sequelize('postgresql://postgres:JiHtxSMCthlvaPu89qKW@containers-us-west-122.railway.app:5605/railway');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize);
db.role = role(sequelize);

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
  
export default {initPostgresDB, db};
