import { useState, useEffect } from "react";

import RatingItem from "../rating-item/rating-item.component";

import { ReactComponent as IconStar } from "../assets/icon-star.svg";

import "./rating.styles.scss";

const Rating = ({ ratings, onClick }) => {
  const [ratingValues, setRatingValues] = useState(ratings);
  const [somethingSelected, setSomethingSelected] = useState(true);

  const onSelectHandler = (rateNbrClicked) => {
    setRatingValues((prevRatingValues) =>
      prevRatingValues.map((ratingValue) => ({
        ...ratingValue,
        selected: ratingValue.rate === rateNbrClicked,
      }))
    );
  };

  useEffect(() => {
    setSomethingSelected(() => !ratingValues.some((rv) => rv.selected));
  }, [ratingValues]);

  const onSubmitHandler = () => {
    onClick(false, ratingValues);
  };

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
        {ratingValues?.map(({ rate, selected }) => (
          <RatingItem
            key={rate}
            rate={rate}
            selected={selected}
            onClick={onSelectHandler}
          />
        ))}
      </div>
      <button
        className="rating-container__submit"
        onClick={onSubmitHandler}
        disabled={somethingSelected}
      >
        Submit
      </button>
    </div>
  );
};

export default Rating;
