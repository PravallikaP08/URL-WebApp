import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./Controllers/url.js";
const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://pravallikaponnada8_db_user:XXBOckXzROGgZOzJ@cluster0.z4ypxxp.mongodb.net/git ",
    { dbName: "Url_Shortner" }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

//rendering the ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});
//shorting url logic
app.post("/short", shortUrl);
// redirect to original UTRL using shotcode:- dynamic routing
app.get("/:shortCode", getOriginalUrl);

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
