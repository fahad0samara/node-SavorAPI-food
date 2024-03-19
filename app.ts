const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require('path');

import mongoose from "mongoose";
import productRoutes from './routes/productRoutes';

import productRouter from "./routes/product";
import { Category } from "./models/productModel";
// MongoDB connection string with useNewUrlParser option included
require('dotenv').config();
const MONGODB_URI: string = process.env.MONGODB_URI ?? '';

if (!MONGODB_URI) {
  console.error('MongoDB URI is not defined');
  process.exit(1);
}
console.log('MongoDB URI:', MONGODB_URI);

mongoose
  .connect(MONGODB_URI, 
)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });




// Create Express server
const app = express(); 
const port = 8080; 


// Express configuration
app.use(cors()); 
app.use(helmet()); 
app.use(morgan("dev")); 
app.use(express.json());

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${port}`);
});


app.get('/', (req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.join(__dirname, 'instructions.html'));
});


app.use('/products', productRoutes);














// Export Express app
module.exports = app;
