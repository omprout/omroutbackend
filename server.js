require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const emailRouter = require("./services/emailServices");
const cors = require("cors");
const { connectDatabase } = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");

// ------------------------Deployment-----------------------------
app.get("/", (req, res) => {
  res.send("Backend server deployed successfully.");
});
// ------------------------Deployment-----------------------------

app.use(cors());
app.use(express.json());
app.use("/api/email", emailRouter);
app.use("/api/portfolio", portfolioRoute);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
