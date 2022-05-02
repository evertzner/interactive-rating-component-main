import Rating from "./rating/rating.component";

const App = () => {
  return (
    <div className="App">
      <Rating />
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/esteban-vertzner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esteban Vertzner
        </a>
        .
      </footer>
    </div>
  );
};

export default App;
