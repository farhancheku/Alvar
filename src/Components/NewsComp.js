import { render } from "@testing-library/react";
import React from "react";
import { Card } from "react-bootstrap";
// import engineer from '../Assets/images/enginner.jpg'

export default function newsComp() {
  const cardInfo = [
    {
      image: "../Assets/images/enginner.jpg",
      title: "Protect your business while protecting the planet",
      text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals",
    },
    {
      image: "../Assets/images/enginner.jpg",
      title: "Protect your business while protecting the planet",
      text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals",
    },
    {
      image: "../Assets/images/enginner.jpg",
      title: "Protect your business while protecting the planet",
      text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals",
    },
    {
      image: "../Assets/images/enginner.jpg",
      title: "Protect your business while protecting the planet",
      text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img varient="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <>{cardInfo.map(renderCard)}</>;
}
