import { Request, Response, NextFunction } from "express";
import { Resend } from "resend";

import Welcome from "../templates/Welcome";
import { MessageResponse } from "../interfaces/MessageResponse";
import ErrorResponse from "../interfaces/ErrorResponse";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  req: Request,
  res: Response<MessageResponse | ErrorResponse>,
  next: NextFunction
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["grepburton@gmail.com"],
      subject: "Welcome to Acme!",
      react: Welcome(),
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(200).json({ message: `Email sent! ${data?.id}` });
  } catch (error) {
    next(error);
  }
}
