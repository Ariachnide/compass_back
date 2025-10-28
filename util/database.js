import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "compass_pg_db://default:defaultPw@compass_pg_db:5432/compass"
);

export default sequelize;
