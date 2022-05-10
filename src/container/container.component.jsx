import { useState } from "react";

import Rating from "../rating/rating.component";
import Greeting from "../greeting/greeting.component";

/* Este objeto esta hardcodeado y por ende existe desde que empezas la app
   En proyectos reales, 90% de las veces vas a consumir una API para obtener estos valores
   Ahi vas a tener que contemplar que cuando tu componente se monte, quizas no tengas el objeto aun completo,
   porque lo estes fetcheando de la api.
   Yo te sugiero como siguiente paso empezar a fetchear alguna api para hacer algo, porque te vas a cruzar
   un monton de problemas que pasan siempre como:
   - manejo de estados (cuando aun no hizo el fetch, cuando esta haciendolo, cuando termina con exito o con error)
   - renderear componentes condicionalmente a si ya tenes el objeto listo o no.
   por ejemplo el componente Greetings hace un ratings.sort, y si ratings estuviera vacio eso te explotaria.
*/
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

  // Raro que el parametro se llame status, por ahi deberia llamarse willRate tambien.
  const onToggleHandler = (status, ratingValues) => {
    setWillRateValue(status);
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
