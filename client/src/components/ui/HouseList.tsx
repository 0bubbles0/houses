import { HouseListCard } from "../molecules/HouseListCard";
import "./HouseList.css";

import { House } from "../../types/house";

export const HouseList = ({ houses }: { houses: House[] }) => {
  return (
    <ul className="list">
      {houses.map((house, index) => (
        <li key={`${index}-${house.headline}`}>
          <HouseListCard house={house} />
        </li>
      ))}
    </ul>
  );
};
