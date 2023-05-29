import classes from "./Card.module.css";

interface CardProps {
  isMoon: boolean;
}

function Card(props: CardProps) {
  return (
    <div>
      <div
        className={`${classes.userInfo} ${
          props.isMoon ? classes.darkMode : ""
        }`}
      ></div>
    </div>
  );
}

export default Card;
