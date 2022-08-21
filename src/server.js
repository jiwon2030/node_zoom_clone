import express from "express";
import path from 'path'

const app = express();

app.set("view engine", "pug");
app.set("src","/src")
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen); 