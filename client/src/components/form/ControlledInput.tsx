import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

import "./Form.css";

export const ControlledInput = ({
  label,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <label className="flex-col">
      <span>
        {label}
        {props.required && <span className="error"> *</span>}
        {meta.touched && meta.error ? (
          <span className="error"> {meta.error}</span>
        ) : null}
      </span>

      <input {...field} {...props} />
    </label>
  );
};
