import { House } from "../../types/house";
import { Button } from "./Button";

import "./Card.css";

export const Card = ({
  house: { headline, imageUrl, price },
}: {
  house: House;
}) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-image" />
      <p>{headline}</p>
      <p>{price}</p>
      <Button variant="secondary">Find out more</Button>
    </div>
  );
};
