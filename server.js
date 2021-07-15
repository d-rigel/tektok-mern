import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import videoApi from "./routes/api/videos.js";

const app = express();

connectDB();

//Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h3>Welcome to our api</h3>");
});

// app.get("/api/videos", (req, res) => {
//   res.send(Data);
// });

app.use("/api/videos", videoApi);

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
