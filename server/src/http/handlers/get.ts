import { Request, Response } from "express";

import sendResponse from "../../utils/sendResponse";
import { ReturnData } from "../../types/http/getAll";

export const getHandler = async (req: Request, res: Response) => {
  try {
    // validate request

    // business logic: db stuff

    // format return data

    const data: ReturnData = Array(1).fill({
      headline: "Big Mansion",
      price: "£200,000",
      imageUrl:
        "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });

    // handle success
    sendResponse(res, { status: "success", code: 200, data });
  } catch (e) {
    // handle error
    sendResponse(res, { status: "error", e });
  }
};
