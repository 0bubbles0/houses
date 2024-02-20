import House from "../models/house";
import { House as ReqHouse } from "../types/http/house";

const findAll = async () => {
  // can do filter, sort, pagination logic in here in future

  const data = await House.find({});

  return data;
};

const createOne = async (house: ReqHouse) => {
  try {
    const dbHouse = new House(house);

    if (!dbHouse) {
      throw new Error();
    }

    return await dbHouse.save();
  } catch (e) {
    throw new Error();
  }
};

export default { findAll, createOne };
