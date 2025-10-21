import { INTEGER, STRING } from "sequelize";
import db from "../util/database.js";

const User = db.define("user", {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: STRING,
    email: STRING
});

export default User;
