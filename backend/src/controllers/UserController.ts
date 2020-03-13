import { Request, Response } from "express";

const users = [
  {
    name: "caue",
    email: "teste@oi.com"
  }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};
