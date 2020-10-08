import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setLoader(true);
    let respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    let result = await respuesta.json();
    console.log(result[0]);

    setTimeout(() => {
      setPersonaje(result[0]);
      setLoader(false);
    }, 1000);
  };

  const mostrarComponente = // componente condicional
    loader === true ? ( // esto es un operador ternario - similar a un if
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          className="w-75"
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="logo simpsons"
        ></img>
        <Button
          variant="warning"
          className="w-50 my-5 shadow"
          onClick={() => consultarAPI()}
        >
          Obtener frase
        </Button>
      </article>
      {mostrarComponente}{" "}
      {/* operador ternario que muestra un componente u otro - componente condicional */}
    </section>
  );
}

export default App;
