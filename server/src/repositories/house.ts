import House from "../models/house";

const findAll = async () => {
  // can do filter, sort, pagination logic in here in future

  const data = await House.find({});

  return data;
};

export default { findAll };
