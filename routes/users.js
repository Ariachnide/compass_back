import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.js";
import express from "express";
const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
