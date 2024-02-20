import { Request, Response } from "express";

import sendResponse from "../../utils/sendResponse";
import house from "../../repositories/house";

export const createHandler = async (req: Request, res: Response) => {
  // validate request
  const { body } = req;

  if (!body) {
    return sendResponse(res, {
      status: "error",
      code: 404,
      message: "Did not receive a request body",
    });
  }

  try {
    // business logic: db stuff
    await house.createOne(body);

    const data = await house.findAll();

    // handle success
    return sendResponse(res, {
      status: "success",
      code: 200,
      message: "New item created",
      data,
    });
  } catch (e) {
    // handle errors
    return sendResponse(res, {
      status: "error",
      code: 400,
      message: "Could not save the new item",
      e,
    });
  }
};
