import { Form, Formik, FormikProps } from "formik";

import { Button } from "../atoms/Button";
import { House } from "../../types/house";

import { ControlledInput } from "./ControlledInput";
import "./Form.css";

export type ValidationErrors<T> = {
  [key in keyof T]?: string;
};

interface AddHouseFormProps {
  handleSubmit: (values: House) => void;
}

// @todo: reusable Form component
export const AddHouseForm = ({ handleSubmit }: AddHouseFormProps) => {
  const initialValues: House = { price: "", headline: "" };

  const validate = (values: House) => {
    const errors: ValidationErrors<House> = {};
    if (!values.headline) {
      errors.headline = "Required";
    }
    if (!values.price) {
      errors.price = "Required";
    }

    // @todo: more thorough validation & formating (eg uppercase postcodes)

    return errors;
  };

  const onSubmit = (values: House) => {
    // Note that Formik automatically turns address back into an object
    handleSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<House>) => (
        <Form className={"form"}>
          {/* Headline */}
          <ControlledInput
            name="headline"
            label="Headline"
            placeholder="Cosy cottage"
            type="text"
            required
          />

          {/* Price */}
          <ControlledInput
            type="number"
            name="price"
            label="Price in £"
            placeholder="200,000"
            pattern="\d*"
            required
          />
          {/* Description */}
          <ControlledInput
            type="text"
            name="description"
            label="Description"
            placeholder="This is a picturesque 2-bedroom property..."
          />

          {/* Image Url */}
          <ControlledInput
            type="text"
            name="imageUrl"
            label="Image"
            placeholder="Insert an url to the image"
            required
          />

          {/* Address Line 1 */}
          <ControlledInput
            type="text"
            name="address.line1"
            label="Address Line 1"
            placeholder="Apartment or Street name"
            required
          />

          {/* Address Line 2 */}
          <ControlledInput
            type="text"
            name="address.line2"
            label="Address Line 2"
            placeholder="Further address"
          />

          {/* Address Postcode */}
          <ControlledInput
            type="text"
            name="address.postCode"
            label="Post code"
            placeholder="SW10 ..."
            required
          />

          {/* Address Town */}
          <ControlledInput
            type="text"
            name="address.city"
            label="City"
            placeholder="London"
            required
          />

          {/* Address Country */}
          <ControlledInput
            type="text"
            name="address.country"
            label="Country"
            placeholder="United Kingdom"
            required
          />

          {/* Submit button, loading state*/}
          <Button variant="primary" type="submit" disabled={props.isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
