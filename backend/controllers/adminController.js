import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import Admin from "../models/userModel.js"
import Contact from "../models/contactModel.js"
// @desc Auth admin/set token
// route POST /api/admin/auth
// @access Public
//login 

const authAdmin = asyncHandler(async (req, res) => {
   const {email, password } =  req.body;
   
   const admin = await Admin.findOne({email});

   if(admin && (await admin.matchPassword(password))){
    generateToken(res, admin._id);
    res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone
       
    });
   } else {
    res.status(401);
    throw new Error('Invaild email or password');

   }


    res.status(200).json({ message: 'Auth Admin'});
});




// @desc    Register a  new admin
// route    POST /api/admin
// @access  Private
//register

const registerAdmin = asyncHandler(async (req, res) => {
   const {name, email, phone, password} = req.body;

   const adminExists = await Admin.findOne({ email });

   if(adminExists){
    res.status(400);
    throw new Error('Admin already exists');
   }

   const admin = await Admin.create({
    name,
    email,
    phone,
    password,
   });

   if(admin){
    generateToken(res, admin._id);
    res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone
       
    });
   } else {
    res.status(400);
    throw new Error('Invaild user data')

   }

    res.status(200).json({ message: 'Register Admin'});
});




// @desc    Logout admin
// route    POST /api/admin/logout
// @access  Private
// logout

const logoutAdmin = asyncHandler(async (req, res) => {
   res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
   })
    res.status(200).json({ message: ' Admin Logged out '})
});




// @desc    Get admin profile
// route    GET /api/admin/profile
// @access  Private
// get profile

const getAdminProfile = asyncHandler(async (req, res) => {
   
    const admin = {
        _id: req.admin._id,
        name: req.admin.name,
        email: req.admin.email,
        phone: req.admin.phone

    };


    res.status(200).json(admin);
});





// @desc    Update admin profile
// route    PuT /api/admin/profile
// @access  Private
//

const updateAdminProfile = asyncHandler(async (req, res) => {

    const admin = await Admin.findById(req.admin._id);

    if(admin){
        admin.name = req.body.name || admin.name;
        admin.email = req.body.email || admin.email;
        admin.phone = req.body.phone || admin.phone;

        if(req.body.password){
            admin.password = req.body.password;

        }

       const updatedAdmin= await admin.save();

       res.status(200).json({
        _id: updatedAdmin._id,
        name: updatedAdmin.name,
        email: updatedAdmin.email,
        phone: updatedAdmin.phone,
       })

    }else{
        res.status(404);
        throw new Error('Admin not found')
    }
  
    res.status(200).json({ message: 'Updated Admin profile'})
});




// @desc    contact an admin
// route    POST /api/admin/contact
// @access  Public
//contact

const contactAdmin = asyncHandler(async (req, res) => {
    const {name, email, phone, company, message} = req.body;
 
   
    const contact = await Contact.create({
     name,
     email,
     phone,
     company,
     message,

    });
 
    if(contact){
     res.status(201).json({
         _id: contact._id,
         name: contact.name,
         email: contact.email,
         phone: contact.phone,
         company: contact.company,
         message: contact.message,
        
     });
    } else {
     res.status(400);
     throw new Error('Invaild contact data')
 
    }
 
 });


 
// @desc    Get admin profile
// route    GET /api/admin/profile
// @access  Private
// get profile



 


export { authAdmin, registerAdmin, logoutAdmin, getAdminProfile, updateAdminProfile, contactAdmin};