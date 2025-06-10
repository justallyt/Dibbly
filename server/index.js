import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db_connection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler, notFound } from "../../Agulu/server/middlewares/errorMiddleware.js";
import UserRoutes from "./routes/userRoutes.js"
import AuthRoutes from "./routes/authRoutes.js"

dotenv.config();

const port = process.env.PORT || 7000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
       credentials: true,
       origin: true
}))

/* Routes */
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/users", UserRoutes);

app.use("/", (req, res) => {
       res.status(200).send("Welcome to Dibbly")
})

//Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening at port ${port}`));

connectToDB();