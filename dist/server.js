import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import app from "./app.js";
main().catch(err => console.log(err));
const port = process.env.PORT || 4000;
async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
// PORT = 4000
// MONGODB_URL=mongodb+srv://CareerBoost:CareerBoost@cluster0.xe3zx.mongodb.net/CareerBoost
// NODE_ENV=development
// JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp
//# sourceMappingURL=server.js.map