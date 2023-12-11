import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD


export const Connection = async () => {
    try {
        let url = 'mongodb+srv://vrajat1997:rajat123@e-commerce.am8y7e8.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(url, {
            useUnifiedTopology
                : true, useNewUrlParser: true
        });
        console.log("DB are Connected")

    } catch (error) {
        console.log("error while connecting with database", error)

    }
}


