import { Response } from "express";

interface ResponseJson {
  status: "success" | "error";
  code?: number;
  message?: string;
  data?: any;
}

const sendResponse = (
  res: Response,
  {
    status,
    data = null,
    code,
    message,
    ...rest
  }: ResponseJson & Record<string, any>,
) => {
  const codeFallback = status === "success" ? 200 : 500;
  const messageFallback =
    status === "success" ? "Success" : "Something went wrong";

  return res.status(codeFallback).json({
    code: code ?? codeFallback,
    success: status === "success",
    message: message ?? messageFallback,
    data,
    ...rest,
  });
};

export default sendResponse;
