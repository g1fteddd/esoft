const express = require("express");
const router = require("./routes");
const cors = require("cors");

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});
