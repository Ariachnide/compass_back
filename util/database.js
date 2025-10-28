import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://username:pwd@db:5432/compass_db"
);

export default sequelize;
