const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message:"Hello from Node.js on Azure..",
        timestamp: new Date().toISOString(),
        status: "running"
    });
});

app.get("/about",(req,res)=>{
    res.status(200).json({
        message:"Hello from About",
    });
})
app.listen(PORT, () => {
    console.log("I ma listening...");
})