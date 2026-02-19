import express from "express";
import cors from "cors";

import { homeRouter } from "./routes/home.router.js";
//import { connectDb } from "./db/connect.db.js";
//import { syncModel } from "./db/model.db.js";

const PORT = 3000;

const app = express();

app.use(cors({
    origin: "http://localhost:5500",
}));

app.use(express.json());

app.use("/", homeRouter);

async function startServer() {
    //await connectDb();
    //await syncModel();
    app.listen(PORT, "localhost", ()=> {
        console.log(`Server is running at port ${PORT}...`);
    });
}

startServer();