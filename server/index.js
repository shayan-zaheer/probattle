require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const morgan = require("morgan");
const configurePassport = require("./utils/passport");
const app = express();

configurePassport(app);

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: ["http://localhost:5173/"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MONGOOSE CONNECTED!"))
.catch(err => console.error(err));

app.use("/auth", authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})