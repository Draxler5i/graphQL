import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log(">>> DB is connected!");
    } catch (err) {
        console.log("Error connecting DB: ", err);
    }
}
