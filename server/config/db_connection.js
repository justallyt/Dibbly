import mongoose from "mongoose";
import "dotenv/config";

const connectToDB = async () => {
      try {
            const connect = await mongoose.connect(process.env.MONGO_URL);
            console.log(`MongoDB connect successfully at: ${connect.connection.host}`)
      } catch (error) {
            console.log(`Error: ${error.message}`);
            process.exit();
      }
}

export default connectToDB;
