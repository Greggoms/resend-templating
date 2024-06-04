import express from "express";
import cors from "cors";
import "dotenv/config";
import "@colors/colors";

import router from "./routes";
import corsOptions from "./config/corsOptions";
import credentials from "./middleware/credentials";
import { errorHandler, notFound } from "./middleware/errorHandlers";

const app = express();
const PORT = process.env.PORT || 5000;

// Configurations
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router());

// Make sure these middleware routes are last, with the errorHandler last.
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.brightCyan.underline);
});
