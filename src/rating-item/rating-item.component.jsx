import "./rating-item.styles.scss";

const RatingItem = ({ rate, isSelected, onClick }) => {

  /*
  Probá tocando los numeros en la pantalla, y vas a ver que se agrega la clase 'rating-item__selected', pero
  no se cómo hacer que se resetee la de los otros numero que no selecciono.  
  */

  /*
  Es un escenario bastante comun, lo correcto es que el parent component decida quien tiene que estar prendido y quien no,
  y que el child component solamente elija el comportamiento en base a lo que el parent le dice.
  el selectedRate deberia manejarlo el parent, para todos sus RatingItem. RatingItem deberia tener un click handler para avisarle al parent
  cuando fue clickeado, y el parent asi sabria cuando activarlos/desactivarlos
  */

  //const [selectedRate, setSelectedRate] = useState(selection);

  const onSelectionHandler = () => {
    onClick(rate)
  };

  // useEffect(() => {

  // }, [selectedRate.rate]);

  return (
    <span
      className={isSelected ? 'rating-item rating-item__selected' : 'rating-item'}
      onClick={onSelectionHandler}
    >
      {rate}
    </span>
  );
};

export default RatingItem;
