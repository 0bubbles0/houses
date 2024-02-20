import { Request, Response } from "express";

import sendResponse from "../../utils/sendResponse";
import { ReturnData } from "../../types/http/getAll";

export const getHandler = async (req: Request, res: Response) => {
  try {
    // validate request

    // business logic: db stuff

    // format return data
    const data: ReturnData = {
      title: "heehe",
    };

    // handle success
    sendResponse(res, { status: "success", code: 200, data });
  } catch (e) {
    // handle error
    sendResponse(res, { status: "error", e });
  }
};
