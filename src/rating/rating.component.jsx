import RatingItem from "../rating-item/rating-item.component";

import "./rating.styles.scss";

const RATING_VALUES = [1, 2, 3, 4, 5];

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating-container__star"></div>
      <div className="rating-container__title">
        <h2>How did we do?</h2>
      </div>
      <div className="rating-container__text">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      {RATING_VALUES.map((item) => (
        <RatingItem />
      ))}
    </div>
  );
};

export default Rating;
