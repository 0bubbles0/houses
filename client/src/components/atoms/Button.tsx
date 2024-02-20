import { PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export const Button = ({
  variant,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  console.log("hi button", variant);
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};
