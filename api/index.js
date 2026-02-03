
import express from "express";
import { prisma } from "../lib/prisma.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/adduser", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: { name, email },
    });

    res.status(201).json({
      message: "User added successfully",
      user,
    });
  } catch (error) {
    console.error("ADD USER ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("GET USERS ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});




// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });



export default app;
