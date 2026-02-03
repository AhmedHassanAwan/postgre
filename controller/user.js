
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



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