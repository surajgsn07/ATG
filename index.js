const express = require("express");
const authRoutes = require("./routes/user.routes.js");
const dbconnect = require("./db/index");


const app = express();
const PORT = process.env.PORT || 3000;
dbconnect();



// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});