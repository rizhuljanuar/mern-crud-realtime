import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});