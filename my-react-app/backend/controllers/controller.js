import { DbConfig } from "../dbConfig/dbConfig.js";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


DbConfig()


const signup = async function signup (req, res) {
    try {
        const userDetails = await req.body;
        console.log(userDetails,',1,1');
        const {first_name, last_name, email, password} = userDetails;
        const userExists = await User.findOne({email});
        if (userExists) {
            console.log("user is already Exists");
            return res.json({error: "user Already Exists", status: 400, success: false})
        }
        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save();
        console.log(savedUser);

        // send verification email
        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return res.json({
            message:"signed up successfully",
            success: true,
            savedUser
        })
    } catch(err) {
        console.log(err);
    }
}

const login =  async function login (req, res)  {
    try {
        const reqBody = await req.body;
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "User does not exist"})
        }        
        //check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return res.status(400).json({error: "Invalid password"});
        }
        console.log(user);

        // add data to token
        const tokenData = {
            id: user._id,
            email:user.email
        }

        const validateToken = jwt.sign(tokenData,'hello', {expiresIn: "1d"})
        res.cookie("token",validateToken,{
            httpOnly: true
        });
        console.log(validateToken,'token')
        return res.status(201).json({
            message: "loggedIn successfully",
            name: user.first_name,
            success: true
        });
    } catch (err) {
        console.log(err,'error ror ');
        return res.json({error: err});
    }
}  

const SignOut =  async (req,res) => {
    try {
        const response = res.json({
            message: "you have been logged out successfully",
            status: 200
        })
        response.cookie.set( "token","",
        { httpOnly: true, expires: new Date(0) }
        )
        return response;
    } catch (err) {
        console.log(err);
    }
};

export {signup, login, SignOut};