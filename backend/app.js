const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const data = require("./routes/data");

app.use(cors());
app.use("/api", data);
app.use("/images", express.static(path.join(__dirname, "assets")));

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
