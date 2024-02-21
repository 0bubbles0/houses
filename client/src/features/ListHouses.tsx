import { useEffect, useState } from "react";

import { getAll } from "../api";

import { HouseList } from "../components/ui/HouseList";

import "./ListHouses.css";
import { House } from "../types/house";

export const ListHouses = () => {
  const [data, setData] = useState<House[]>();

  // @todo optimise this query to prevent rerenders. Maybe use Apollo queries
  useEffect(() => {
    getAll()
      .then((response) => {
        setData(response.data.data);
      })
      .catch((e) => {
        console.log("ERROR!!!", e);
        setData([]);
      });
  }, []);

  // Insert future components for pagination, sort, filter here

  return (
    <section>
      <h2>These are all the houses available</h2>
      {data && data.length ? (
        <HouseList houses={data} />
      ) : (
        <div>
          <p>Sorry, no houses are available yet</p>
          <p style={{ fontSize: "50px" }}>🏡</p>
        </div>
      )}
    </section>
  );
};
