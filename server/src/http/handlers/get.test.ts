import { Request, Response } from "express";
import mongoose from "mongoose";

import { getHandler } from "./get";

// db Mock: ---
jest.mock("mongoose");
const mockedFind = jest.fn();

const mockedTodoModel = {
  find: mockedFind,
};

// @ts-ignore
mongoose.model = jest.fn(() => mockedTodoModel);

const mockMongoResults = [
  {
    headline: "Big Mansion",
    price: "£200,000",
    imageUrl: "example.com",
    address: {
      line1: "1 Magic Way",
      line2: "",
      postCode: "NW10 1DE",
      town: "London",
      country: "UnitedKingdom",
    },
  },
];
// --

describe("get All handler", () => {
  let mockRequest: Request;
  let mockResponse: Response;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRequest = {} as Request;
    mockResponse = {
      status: jest.fn().mockReturnThis,
      json: jest.fn().mockReturnThis,
    } as any;
  });

  it("should return all results", async () => {
    // arrange
    mockedFind.mockResolvedValue(mockMongoResults);

    // act
    await getHandler(mockRequest, mockResponse);

    // assert
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: mockMongoResults });
  });

  it.todo("should return 200 with an empty array if there are no results yet");
  it.todo("should return catch an error and return 500");
});
