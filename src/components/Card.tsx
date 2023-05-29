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
      >
        <img src="" alt="avatar" className={classes.avatarDesktop} />
        <div className={classes.info}>
          <div className={classes.profile}>
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="avatar"
              className={classes.avatarMobile}
            />
            <div className={classes.avatarContainer}>
              <div className={classes.nameContainer}>
                <h2 className={classes.name}>the octocat</h2>
                <h2 className={classes.login}>@octocat</h2>
              </div>
              <p className={classes.createdAt}>Joined 25 Jan 2011</p>
            </div>
          </div>
          <p className={classes.bio}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            distinctio molestias deleniti nam. Dolore iure doloribus facere
            maiores porro ab.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
