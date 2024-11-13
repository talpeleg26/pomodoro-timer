import "./Card.css";

const Card = ({ children, className }) => {
  return <div className={["card", className].join(" ")}>{children}</div>;
};

export default Card;
