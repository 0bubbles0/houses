import "./Card.css";

export const Card = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};
