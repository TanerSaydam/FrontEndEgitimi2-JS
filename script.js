const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get("/api/getTodoList", (req, res)=> {
    res.json(todos);
});

app.post("/api/add", (req, res)=> {
    const {work} = req.body;
    todos.push({work: work, isCompleted: false});

    res.json({message: "Kayıt işlemi başarıyla tamamlandı"});
});

app.post("/api/completeWork", (req, res)=> {
    const {index} = req.body;
    todos[index].isCompleted = true;
    res.json({message: "İş tamamlandı!"});
});

app.post("/api/removeByIndex", (req, res)=> {
    const {index} = req.body;
    todos.splice(index,1);
    res.json({message: "İş kaydı silindi!"});
});

app.listen(5000, ()=> console.log("Api uygulaması 5000 portunda çalışıyor"));
