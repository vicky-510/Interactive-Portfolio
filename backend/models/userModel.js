
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = mongoose.Schema({

    name: {
       type: String,
       required: true   
    },

    email: {
        type: String,
        required: true,
        unique: true   
     },

    phone: {
        type: String,
        required: true,
        unique: true   
     },

     password: {
        type: String,
        required: true   
     },
},
    {
      timestamps: true,
      collection: 'admin',
});

adminSchema.pre('save', async function (next){
   if(!this.isModified('password')){
      return next();
   }

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
   next();
});

adminSchema.methods.matchPassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword, this.password)
}

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;

