
import jwt from 'jsonwebtoken';
import Admin from '../models/userModel.js';
import asyncHandler from 'express-async-handler';


const protect = asyncHandler(async (req, res, next) =>{
    let token;
    
    token = req.cookies.jwt;

    if(token){
        try{
             const decoded = jwt.verify(token, process.env.JWT_SECRET)
             
             req.admin = await Admin.findById(decoded.adminId).select('-password');
             next();
        }

        catch(error){
        res.status(401);
        throw new Error('Not authorized, invalid token');
        }

    }else{
        res.status(401);
        throw new Error(' Not authorized, no token');
    }

});

export { protect };