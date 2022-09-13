import express from "express"

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log('pepe');
    res.json({ "msg": "pepe" });
})//get default

app.listen(PORT, () => {
    console.log(`The app is in 127.0.0.1:${PORT}`);
})//listen