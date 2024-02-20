import { Card } from "../components/atoms/Card";
import { AddHouseForm } from "../components/form/AddHouseForm";
import "./AddHouse.css";

// /** Todo
//  * required
//  * validate: empty or wrong format
//  * error message
//  * submit loading
//  * submit: success modal
//  * submit: error message
//  * redirect
//  * /

export const AddHouse = () => {
  // POST "/" query

  return (
    <>
      <h1>Add a new property</h1>
      <Card style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
        <AddHouseForm />
      </Card>

      {/* Thanks, success modal, redirect */}
    </>
  );
};
