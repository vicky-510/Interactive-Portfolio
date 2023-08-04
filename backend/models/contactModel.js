
import mongoose from "mongoose";



const contactSchema = mongoose.Schema({

    name: {
       type: String,
       required: true   
    },

    email: {
        type: String,
        required: true,
     },

    phone: {
        type: String,
        required: true,
     },

     company: {
        type: String,
        required: true   
     },
     message: {
        type: String,
        required: true   
     },
},
    {
      timestamps: true,
      collection: 'contactInfo',
});



const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

