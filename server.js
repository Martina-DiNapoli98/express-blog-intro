const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"))

app.get('/',(req, res)=>{
    res.send("Server del mio blog")
});

app.listen(port, (req,res)=>{
    console.log(`Server is running on port http://localohost:${port}`)
});

const posts = [
    {
        title: "ciambellone",
        content:"dolce",
        img:"/images/ciambellone.jpeg",
        tags:["ciambellone","dolce","ricetta"]
    },
    {
        title: "cracker barbabietola",
        content:"snack",
        img:"/images/cracker_barbabietola.jpeg",
        tags:["crackers","snacks","vegan"]
    },
    {
        title: "pasta barbabietola",
        content:"pasta",
        img:"/images/pasta_barbabietola.jpeg",
        tags:["pasta","barbabietola","ricetta","vegan"]
    },
    {
        title: "torta paesana",
        content:"torta",
        img:"/images/torta_paesana.jpeg",
        tags:["torta","dolce","ricetta"]
    },
    {
        title: "pane fritto",
        content:"pane fritto",
        img:"/images/pane_fritto.jpeg",
        tags:["pane","fritto","ricetta"]
    }
];

console.log(posts);

app.get('/bacheca', (req,res)=>{
    res.json(posts)
})