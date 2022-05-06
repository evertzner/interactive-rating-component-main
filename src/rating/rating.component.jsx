import { useState } from "react";
import RatingItem from "../rating-item/rating-item.component";

import { ReactComponent as IconStar } from "../assets/icon-star.svg";

import "./rating.styles.scss";


const initialRatingValues = [
  {rate: 1, isSelected: false},
  {rate: 2, isSelected: false},
  {rate: 3, isSelected: false},
  {rate: 4, isSelected: false},
  {rate: 5, isSelected: false},
]

const Rating = () => {
  const [ratingValues, setRatingValues] = useState(initialRatingValues)
  
  const onRatingValueClick = (rateNbrClicked) => {
    setRatingValues((prevRatingValues) => 
      prevRatingValues.map(ratingValue => ({...ratingValue, isSelected: ratingValue.rate === rateNbrClicked}))
    )
  }

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
        {ratingValues?.map(({rate, isSelected}) => (
          <RatingItem key={rate} rate={rate} isSelected={isSelected} onClick={onRatingValueClick} />
        ))}
      </div>
      <button className="rating-container__submit">Submit</button>
    </div>
  );
};

export default Rating;
