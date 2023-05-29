import classes from "./Contact.module.css";
import iconLocation from "../assets/icon-location.svg";
import iconWebsite from "../assets/icon-website.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconCompany from "../assets/icon-company.svg";

interface UserData {
  location?: string | null | undefined;
  blog?: string | undefined;
  twitter_username?: string | null;
  company?: string | null;
}

interface ContactProps {
  isMoon: boolean;
  data: UserData;
}

function Contact(props: ContactProps) {
  return (
    <div>
      <div className={classes.contact}>
        <div
          className={`${classes.contactItem} ${
            !props.data.location && classes.opacity
          }`}
        >
          <div>
            <img src={iconLocation} alt="location icon" />
          </div>
          <h2 className={classes.contactText}>
            {props.data.location ? props.data.location : "not available"}
          </h2>
        </div>
        <div
          className={`${classes.contactItem} ${
            !props.data.blog && classes.opacity
          }`}
        >
          <div>
            <img src={iconWebsite} alt="website icon" />
          </div>
          <a
            href={props.data.blog}
            className={`${classes.contactText} ${classes.websiteLink}`}
          >
            {props.data.blog ? props.data.blog : "not available"}
          </a>
        </div>
        <div
          className={`${classes.contactItem} ${
            !props.data.twitter_username && classes.opacity
          }`}
        >
          <div>
            <img src={iconTwitter} alt="twitter icon" />
          </div>
          <h2 className={classes.contactText}>
            {props.data.twitter_username
              ? props.data.twitter_username
              : "not available"}
          </h2>
        </div>
        <div
          className={`${classes.contactItem} ${
            !props.data.company && classes.opacity
          }`}
        >
          <div>
            <img src={iconCompany} alt="company icon" />
          </div>
          <h2 className={classes.contactText}>
            {props.data.company ? props.data.company : "not available"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
