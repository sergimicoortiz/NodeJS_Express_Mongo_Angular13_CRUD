"use strict";

import dotenv from "dotenv"
import express from "express"
import cors from 'cors';
import router from "./app/router/router.js";
import connectdb from "./app/config/config_db.js";

const cors_options = {
    origin: process.env.CORSURL || "http://localhost:4200"
};

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
connectdb();
app.use(cors(cors_options));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`The app is in 127.0.0.1:${PORT}`);
})//listen