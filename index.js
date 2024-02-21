const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const transacationRoutes = require("./routes/transaction.Routes")
const userRoutes = require("./routes/user.Routes")
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


app.use("/users", userRoutes);
app.use("/transactions", transacationRoutes);



const PORT = 8000 || process.env.PORT;



//listen server
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
