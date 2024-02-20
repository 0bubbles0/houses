import { Request, Response } from "express";

// import Todo from "../../schemas/todo";
import sendResponse from "../../utils/sendResponse";

export const getHandler = async (req: Request, res: Response) => {
  // business logic: db stuff
  console.log("hiiii handler");

  sendResponse(res, { status: "success", code: 200, data: { title: "heehe" } });

  // try {
  //   // handle errors
  //   const todos = await Todo.find({}, { __v: 0 });

  //   sendResponse(res, { status: "success", code: 200, data: todos });
  //   // no results will return data: []
  // } catch (e) {
  //   sendResponse(res, { status: "error", e });
  // }
};

// export default getHandler;
