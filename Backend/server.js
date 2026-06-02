const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/message", (req, res) => {
    res.json({
        text: "This is response from backend.",
        tasks: [
            "nemuidesu",
            "Oyasumi"
        ]
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});