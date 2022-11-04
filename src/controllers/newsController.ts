import { Request, Response } from "express";

export default function appHealth(req: Request, res: Response) {
  res.send("Fullstack Challenge 2021 🏅 - Space Flight News");
}
