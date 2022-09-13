import express from "express"
import router from "./app/router/router.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`The app is in 127.0.0.1:${PORT}`);
})//listen