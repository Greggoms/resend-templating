import { Router } from "express";

import { sendEmail } from "../controllers/email.controller";

// https://youtu.be/b8ZUb_Okxro?si=dJX6jFlpGmnPhq1P&t=1529
export default (router: Router) => {
  router.post("/email/send", sendEmail);
};
