import { ReactComponent as IllustrationThankYou } from "../assets/illustration-thank-you.svg";

import "./greeting.styles.scss";

const Greeting = ({ selected, max, onClick }) => {
  const onStartAllOverHandler = () => {
    onClick(true);
  };

  return (
    <div className="greeting-container" onClick={onStartAllOverHandler}>
      <div className="greeting-container__image-container">
        <IllustrationThankYou className="greeting-container__image-container--image" />
      </div>
      <div className="greeting-container__selection">
        <p>
          You selected {selected} out of {max}
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
