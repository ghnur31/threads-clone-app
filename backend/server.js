const express = require("express");
const connectDB = require("./db/connectDB");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cloudinary = require("cloudinary").v2;
const {app, server} = require("./socket/socket");

dotenv.config();
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
