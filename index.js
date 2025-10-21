import express from "express";
import bodyparser from "body-parser";
import sequelize from "./util/database.js";
import userRoutes from "./routes/users.js";
import User from "./models/user.js";

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.get("/", (req, res, next) => {
    res.send("Hello World");
});

app.use("/users", userRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

sequelize
    .sync()
    .then(result => {
        console.log("Database connected");
        app.listen(8000);
    })
    .catch(err => console.log(err));
