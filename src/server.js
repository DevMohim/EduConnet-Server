import "dotenv/config";
import app from "./app.js";
import { connectToMongoDB } from "./config/db.js";

const port = process.env.PORT || 5000;

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running in http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });
