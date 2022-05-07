import "./rating-item.styles.scss";

const RatingItem = ({ rate, selected, onClick }) => {
  const onSelectionHandler = () => {
    onClick(rate);
  };

  return (
    <span
      className={`rating-item ${selected ? "rating-item__selected" : ""}`}
      onClick={onSelectionHandler}
    >
      {rate}
    </span>
  );
};

export default RatingItem;
