import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";

// register Student
export const registerStudent = async (req,res) => {
    try{
        const { 
            firstName,
            lastName,
            email,
            password,
            picturePath,
            weight=0,
            height="",S
         } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password , salt);
        const newStudent = new Student({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            weight,
            height,
            trainers:[]
        });
       const savedStudent =  await newStudent.save();
       res.status(201).json(savedStudent);
    } catch(err){
        res.status(500).json({error:err.message});
    }
};

export const login = async (req,res) => {
    console.log("login api hit")
    try{
        const {email , password} = req.body;
        const student = await Student.findOne({email:email})
        if(!student) return res.status(400).json({msg:"Student does not exist"});
        const isMatch = await bcrypt.compare(password , student.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid credentials"});
        const token = jwt.sign({id:student._id} , process.env.JWT_SECRET);
        delete student.password;
        res.status(200).json({token , student});
    } catch(err){
        res.status(500).json({error:err.message});
    }
}