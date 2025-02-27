import mongoose from 'mongoose';
import { Schema } from 'mongoose';


// Create a new schema for our user data
const postSchema = new Schema({
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        default: 'general',
    },
    desc: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    visit : {
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

// Create a new model with our schema
export default mongoose.model('Post', postSchema);