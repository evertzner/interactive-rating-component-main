import { ReactComponent as IllustrationThankYou } from "../assets/illustration-thank-you.svg";

import "./greeting.styles.scss";

const Greeting = ({ ratings, onClick }) => {
  const initialRate = [
    {
      rate: 0,
      selected: false,
    },
  ];
  const onStartAllOverHandler = () => {
    onClick(true, initialRate);
  };

  const selectedRating = ratings.find((r) => r.selected).rate;

  const maxRating = ratings.sort((a, b) => {
    if (a.rate > b.rate) {
      return -1;
    } else {
      return 1;
    }
  })[0].rate;

  return (
    <div className="greeting-container" onClick={onStartAllOverHandler}>
      <div className="greeting-container__image-container">
        <IllustrationThankYou className="greeting-container__image-container--image" />
      </div>
      <div className="greeting-container__selection">
        <p>
          You selected {selectedRating} out of {maxRating}
        </p>
      </div>
      <div className="greeting-container__title">
        <h2>Thank you!</h2>
      </div>
      <div className="greeting-container__text">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Greeting;
