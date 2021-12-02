export default function Card(props: {
  id: number;
  title: string;
  description: string;
  price: number;
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
}) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.coverImg}`).default}
        className="card--image"
        alt=""
      />
      <div className="card--stats">
        <img
          src={require("../images/star.png").default}
          className="card--star"
          alt="Star"
        />
        <span>&nbsp;{props.stats.rating}&nbsp;</span>
        <span className="gray">({props.stats.reviewCount})&nbsp;•&nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
