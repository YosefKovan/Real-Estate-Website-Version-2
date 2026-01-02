import express from "express";
import "/dotnev/config";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log("server started up successfully")
});
