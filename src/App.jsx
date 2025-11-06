import React from "react";
import Card from "./Card";
import "./Card.css";

function App() {

  const cardsData = [
  {
    image: "https://images.unsplash.com/photo-1594370848018-8b47aef0f7ce?w=600",
    title: "Paracetamol",
    description: "Used to reduce fever and mild pain."
  },
  {
    image: "https://images.unsplash.com/photo-1590099543486-6772f08f3c3a?w=600",
    title: "Vitamin Tablets",
    description: "Essential multivitamin supplement."
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
    title: "Cough Syrup",
    description: "Relief from cough and sore throat."
  },
  {
    image: "https://images.unsplash.com/photo-1611353229186-a6c0b3e2c508?w=600",
    title: "Antibiotic Capsules",
    description: "Effective against bacterial infections."
  },
  {
    image: "https://images.unsplash.com/photo-1580281780460-82d6c1813f56?w=600",
    title: "First Aid Kit",
    description: "Basic medical emergency supplies."
  },
  {
    image: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=600",
    title: "Medical Tools",
    description: "General healthcare instruments."
  }
];


  return (
    <div className="card-container">
      {cardsData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
