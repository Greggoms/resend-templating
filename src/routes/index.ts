import express, { Router } from "express";

import email from "./email.routes";

const router = express.Router();

// https://youtu.be/b8ZUb_Okxro?si=dJX6jFlpGmnPhq1P&t=1529
export default (): Router => {
  email(router);
  return router;
};
