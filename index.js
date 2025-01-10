const express = require("express");
const authRoutes = require("./routes/user.routes.js");
const dbconnect = require("./db/index");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
dbconnect();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));



// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});