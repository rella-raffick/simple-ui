import "reflect-metadata";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { sequelize } from "../db";
import { SimpleUser } from "../models/simpleuser.model";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.post("/register", async (_request: Request, _response: Response) => {
  try {
    const { firstName, lastName } = _request.body;
    const user = await SimpleUser.create({
      firstName,
      lastName
    }
);
    _response
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error registering user:", error);
    _response.status(500).json({ error: "Internal Server Error" });
  }
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
