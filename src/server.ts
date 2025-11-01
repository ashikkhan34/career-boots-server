import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
import app from "./app.js";

main().catch(err => console.log(err));
const port = process.env.PORT || 4000

async function main() {
  await mongoose.connect(process.env.MONGODB_URL!);

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

