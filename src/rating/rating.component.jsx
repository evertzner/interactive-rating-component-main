import RatingItem from "../rating-item/rating-item.component";

import { ReactComponent as IconStar } from "../assets/icon-star.svg";

import "./rating.styles.scss";

const RATING_VALUES = [1, 2, 3, 4, 5];

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating-container__star-container">
        <IconStar className="rating-container__star-container--star" />
      </div>
      <div className="rating-container__title">
        <h2>How did we do?</h2>
      </div>
      <div className="rating-container__text">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-container__rates">
        {RATING_VALUES.map((rate) => (
          <RatingItem key={rate} rate={rate} />
        ))}
      </div>
      <button className="rating-container__submit">Submit</button>
    </div>
  );
};

export default Rating;
