import React from "react";

export default function FoodItem({ navn, kalorier, vitaminB12, vitaminC, vitaminA }) {
  return (
    <div className="madvare">
      {/* Adjust the image path as needed */}
      <img src={`/assets/food-images/${navn.toLowerCase()}.png`} alt={navn} />
      <h3>{navn}</h3>
      <p>Kalorier: {kalorier}</p>
      <p>Vitamin B12: {vitaminB12}</p>
      <p>Vitamin C: {vitaminC}</p>
      <p>Vitamin A: {vitaminA}</p>
    </div>
  );
}
