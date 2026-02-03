

import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
const port = 3000;  



app.use(express.json());

 


app.get('/', (req, res) => {
  res.send('Hello World!');
} 
);  



export const adduser = async (req, res) => {
    
    const  data = req.body;
    res.send({message: "User added successfully", data: data});

    const  user = await prisma.user.create({
      data: {
            name: data.name,
            email: data.email,
        }
    }); 

    res.status(201).json(user);
    console.log(user);
}

const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);  
} 


app.get('/users', getUsers);
app.post('/adduser', adduser);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}
); 

export default app;

