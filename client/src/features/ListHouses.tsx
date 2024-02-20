import { useEffect, useState } from "react";

import { House } from "../types/house";
import { getAll } from "../api";

export const ListHouses = () => {
  const [data, setData] = useState<House[]>();

  useEffect(() => {
    getAll()
      .then((response) => {
        console.log("hiiiii getQuery", response);
        setData(response.data.data);
      })
      .catch((e) => {
        console.log("ERROR!!!", e);
        setData([]);
      });
  }, []);

  return (
    <section>
      <h3>These are all the houses available:</h3>
      {data && data.length ? (
        <HouseList houses={data} />
      ) : (
        <p>Sorry, no houses are available yet</p>
      )}
    </section>
  );
};

const HouseList = ({ houses }: { houses: House[] }) => {
  return (
    <>
      <p>{houses[0].headline}</p>
      <img src={houses[0].imageUrl} height="200" width="200" />
    </>
  );
};
