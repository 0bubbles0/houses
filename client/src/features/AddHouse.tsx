import { useNavigate } from "react-router-dom";
import api from "../api";
import { Card } from "../components/atoms/Card";
import { AddHouseForm } from "../components/form/AddHouseForm";
import { House } from "../types/house";
import "./AddHouse.css";
import { useState } from "react";

export const AddHouse = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(false);

  const handleSubmit = async (house: House) => {
    try {
      await api.createOne(house);

      navigate("/");
    } catch (e) {
      setApiError(true);
    }
  };

  return (
    <>
      <h1>Add a new property</h1>
      <Card style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
        <AddHouseForm handleSubmit={handleSubmit} />

        {apiError && <span>Something went wrong</span>}
      </Card>
    </>
  );
};
