import { useState } from "react";

import Rating from "../rating/rating.component";
import Greeting from "../greeting/greeting.component";

const RATING_VALUES = [
  { rate: 1, selected: false },
  { rate: 2, selected: false },
  { rate: 3, selected: false },
  { rate: 4, selected: false },
  { rate: 5, selected: false },
];

const Container = () => {
  const [willRate, setWillRateValue] = useState(true);
  const [ratings, setRatings] = useState(RATING_VALUES);

  const onToggleHandler = (status, ratingValues = RATING_VALUES) => {
    setWillRateValue(status);
    setRatings(ratingValues);
  };

  const maxRating = ratings[ratings.length - 1].rate;

  return (
    <div>
      {willRate ? (
        <Rating ratings={ratings} onClick={onToggleHandler} />
      ) : (
        <Greeting
          onClick={onToggleHandler}
          selected={ratings.filter((r) => r.selected)[0].rate}
          max={maxRating}
        />
      )}
    </div>
  );
};

export default Container;
