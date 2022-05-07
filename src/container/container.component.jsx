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
  const ratingStatus = {
    willRate: true,
  };

  const [{ willRate }, setWillRateValue] = useState(ratingStatus);
  const [ratings, setRatings] = useState(RATING_VALUES);

  const onToggleHandler = (status, ratingValues) => {
    setWillRateValue({ willRate: status });
    setRatings(ratingValues);
  };

  return (
    <div>
      {willRate ? (
        <Rating ratings={RATING_VALUES} onClick={onToggleHandler} />
      ) : (
        <Greeting ratings={ratings} onClick={onToggleHandler} />
      )}
    </div>
  );
};

export default Container;
