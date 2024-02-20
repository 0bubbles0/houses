import { House } from "../../types/house";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";

import "./HouseListCard.css";

export const HouseListCard = ({
  house: { headline, imageUrl, price },
}: {
  house: House;
}) => {
  return (
    <Card>
      <div className="card">
        <img src={imageUrl} className="card-image" />
        <p>{headline}</p>
        <p>{price}</p>
        <Button variant="secondary">Find out more</Button>
      </div>
    </Card>
  );
};
