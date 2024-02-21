import { Request, Response } from "express";

import sendResponse from "../../utils/sendResponse";
// import { ReturnData } from "../../types/http/getAll";
import house from "../../repositories/house";

export const getHandler = async (req: Request, res: Response) => {
  try {
    // validate request

    // business logic: db stuff
    const data = await house.findAll();

    // format return data

    // handle success
    return sendResponse(res, { status: "success", code: 200, data });
  } catch (e) {
    // handle error
    return sendResponse(res, { status: "error", e });
  }
};
