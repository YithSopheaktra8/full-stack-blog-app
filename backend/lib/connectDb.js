import mongoose from 'mongoose';
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: process.env.MONGO_DB_NAME,
        })
        console.log('Connected to database')
    } catch (error) {
        console.log(error)
    }
};

export default connectDb;