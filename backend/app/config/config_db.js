import mongoose from "mongoose"

const connectdb = async function () {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');

    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}//connectdb

export default connectdb;