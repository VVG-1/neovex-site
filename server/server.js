import express from "express";
import mailchimpRoute from "./routes/mailchimp.js";

const app = express();

app.use(express.json());

app.use("/api/mailchimp", mailchimpRoute);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
