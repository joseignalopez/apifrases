import React from "react";
import Card from "react-bootstrap/Card";

const Frase = (props) => {
  return (
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.personaje.image} alt={props.personaje.character} className="w-50"></img>
          </div>
          <div className="col-sm-12 col-md-8 my-3">
            <Card.Title className="my-3">{props.personaje.character}</Card.Title>
            <Card.Text className="my-5">{props.personaje.quote}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
