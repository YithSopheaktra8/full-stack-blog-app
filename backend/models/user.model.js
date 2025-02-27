import mongoose from 'mongoose';
import { Schema } from 'mongoose';


// Create a new schema for our user data
const userSchema = new Schema({
    clerkUserId: {
        type: String,
        required: true,
        unique: true
    },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email : { 
        type: String, 
        required: true, 
        unique: true 
    },
    img : { 
        type: String,
    },
    savedPosts : { 
        type: [String],
        default: []
    },

}, { timestamps: true });

// Create a new model with our schema
export default mongoose.model('User', userSchema);