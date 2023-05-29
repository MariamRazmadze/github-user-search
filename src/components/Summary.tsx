import classes from "./Summary.module.css";

interface UserData {
  public_repos?: number | null;
  followers?: number | null;
  following?: number | null;
}
interface SummaryProps {
  isMoon: boolean;
  data: UserData;
}

function Summary(props: SummaryProps) {
  return (
    <div>
      <div
        className={`${classes.summary} ${props.isMoon ? classes.darkMode : ""}`}
      >
        <div className={classes.summaryItem}>
          <h2 className={classes.summaryTitle}>repos</h2>
          <h2 className={classes.summaryAmount}>{props.data.public_repos}</h2>
        </div>
        <div className={classes.summaryItem}>
          <h2 className={classes.summaryTitle}>followers</h2>
          <h2 className={classes.summaryAmount}>{props.data.followers}</h2>
        </div>
        <div className={classes.summaryItem}>
          <h2 className={classes.summaryTitle}>following</h2>
          <h2 className={classes.summaryAmount}>{props.data.following}</h2>
        </div>
      </div>
    </div>
  );
}

export default Summary;
