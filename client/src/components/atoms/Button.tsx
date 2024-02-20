import { PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: () => void;
  variant: "primary" | "secondary";
}

export const Button = ({
  onClick,
  variant,
  children,
}: ButtonProps & PropsWithChildren) => {
  console.log("hi button", variant);
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
