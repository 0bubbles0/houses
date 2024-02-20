import { useEffect, useState } from "react";

import { getAll } from "../api";

import { HouseList } from "../components/ui/HouseList";

import "./ListHouses.css";
import { House } from "../types/house";

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
      <h2>These are all the houses available:</h2>
      {data && data.length ? (
        <HouseList houses={data} />
      ) : (
        <p>Sorry, no houses are available yet</p>
      )}
    </section>
  );
};
