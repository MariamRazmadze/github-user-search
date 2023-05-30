import classes from "./Card.module.css";
import Summary from "./Summary";
import Contact from "./Contact";

interface UserData {
  name?: string | null;
  login?: string | null;
  created_at?: string | null;
  bio?: string | null;
  avatar_url?: string | undefined;
  location?: string | null | undefined;
  blog?: string | undefined;
  twitter_username?: string | null;
  company?: string | null;
  public_repos?: number | null;
  followers?: number | null;
  following?: number | null;
}

interface CardProps {
  isMoon: boolean;
  data: UserData;
}

function Card(props: CardProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div>
      <div
        className={`${classes.userInfo} ${
          props.isMoon ? classes.darkMode : ""
        }`}
      >
        <img
          src={props.data.avatar_url}
          alt="avatar"
          className={classes.avatarDesktop}
        />
        <div className={classes.info}>
          <div className={classes.profile}>
            <img
              src={props.data.avatar_url}
              alt="avatar"
              className={classes.avatarMobile}
            />
            <div className={classes.avatarContainer}>
              <div className={classes.nameContainer}>
                <h2 className={classes.name}>{props.data.name}</h2>
                <h2 className={classes.login}>{`@${props.data.login}`}</h2>
              </div>
              {props.data.created_at && (
                <p className={classes.createdAt}>
                  {`joined ${formatDate(props.data.created_at)}`}
                </p>
              )}
            </div>
          </div>
          <p className={classes.bio}>
            {props.data.bio
              ? props.data.bio
              : "Lorem ipsum dolor sit omet, consecteteur adipiscing elit. Donec odio. Quisque volutpat mottis eros."}
          </p>
        </div>
        <Summary isMoon={props.isMoon} data={props.data} />
        <Contact isMoon={props.isMoon} data={props.data} />
      </div>
    </div>
  );
}

export default Card;
