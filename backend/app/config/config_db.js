import mongoose from "mongoose"

const connectdb = async function (mongo_url = process.env.MONGO_URI) {

    try {
        await mongoose.connect(mongo_url);
        console.log('DB connected');

    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}//connectdb

export default connectdb;