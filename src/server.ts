import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = 3002;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
