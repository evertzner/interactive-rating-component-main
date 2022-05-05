import { useState, useEffect } from "react";

import "./rating-item.styles.scss";

const RatingItem = ({ rate }) => {
  const selection = {
    selected: 0,
    className: "",
  };

  /*
  Probá tocando los numeros en la pantalla, y vas a ver que se agrega la clase 'rating-item__selected', pero
  no se cómo hacer que se resetee la de los otros numero que no selecciono.  
  */

  const [selectedRate, setSelectedRate] = useState(selection);

  const onSelectionHandler = () => {
    setSelectedRate({ selected: rate, className: "rating-item__selected" });
  };

  // useEffect(() => {

  // }, [selectedRate.rate]);

  return (
    <span
      className={`rating-item ${
        rate === selectedRate.selected && selectedRate.className
      }`}
      onClick={onSelectionHandler}
    >
      {rate}
    </span>
  );
};

export default RatingItem;
