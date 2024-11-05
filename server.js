import colors from "colors";
import dontenv from "dotenv";
import express  from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url";

// Configure env
dontenv.config();

// database connection
connectDB();

// esmodule5 fixes cyclic
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest object
const app = express();

// middeleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./var/task/client/build')))

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoute );
app.use('/api/v1/product', productRoute );

// rest api
// 1.
// app.get('/',(req, res)=> {
//     res.send('<h1>Welcome to Home Page..</h1>')
// });
// 2.
app.use('*', function(req, res){
  res.sendFile(path.join(__dirname,'./var/task/client/build/index.html'));
});

app.get('/', function(req, res){
  res.send('Product Api running...');
});



// PORT
const PORT = process.env.PORT || 8080;
console.log(PORT);

// run listen
app.listen(PORT, () => {
    console.log(`Server ${process.env.DEV_MODE} Running on ${PORT}`.bgWhite.blue.bold);
})
