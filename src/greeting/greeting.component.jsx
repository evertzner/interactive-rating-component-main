import { ReactComponent as IllustrationThankYou } from "../assets/illustration-thank-you.svg";

import "./greeting.styles.scss";

/* Aca me parece que hay un tema de responsabilidades en los componentes que se puede mejorar
   Si Greetings solo necesita mostrar un mensaje con la opcion seleccionada y el maximo posible,
   para que pasarle todo el objeto ratings. Si manana por ejemplo queres que la escala sea "muy bajo" a "muy alto",
   te conviene dejar que este componente sea mas presentacional, y que tu contenedor le diga que poner en 
   selectedRating y que en maxRating.
   Entonces a futuro, este Greeting te sirve no importa cual sea la escala, solo necesita que le digas que valor eleigio
   y que valor es el maximo... se abstrae del calculo.
*/
const Greeting = ({ ratings, onClick }) => {
  const initialRate = [
    {
      rate: 0,
      selected: false,
    },
  ];
  const onStartAllOverHandler = () => {
    onClick(true, initialRate);
  };

  const selectedRating = ratings.find((r) => r.selected).rate;

  // Ya tenes ordenado el objeto no? para que re-ordenarlo?
  // Podrias simplemente tomar el ultimo indice usando ratings[ratings.length - 1].rate
  // Igual a mi gusto, le dejaria esa responsabilidad al componente principal.
  const maxRating = ratings.sort((a, b) => {
    if (a.rate > b.rate) {
      return -1;
    } else {
      return 1;
    }
  })[0].rate;

  return (
    <div className="greeting-container" onClick={onStartAllOverHandler}>
      <div className="greeting-container__image-container">
        <IllustrationThankYou className="greeting-container__image-container--image" />
      </div>
      <div className="greeting-container__selection">
        <p>
          You selected {selectedRating} out of {maxRating}
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
