import mongoose from 'mongoose';
import { Schema } from 'mongoose';


// Create a new schema for our user data
const commentSchema = new Schema({
    desc : {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },

}, { timestamps: true });

// Create a new model with our schema
export default mongoose.model('Comment', commentSchema);