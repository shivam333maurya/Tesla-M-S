import "./Card.css";

const Card = (props: any) => {
  return <div className={`customCard`}>{props.children}</div>;
};

export default Card;
