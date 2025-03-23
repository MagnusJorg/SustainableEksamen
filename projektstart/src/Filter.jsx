import React from "react";
import "./App.css";  
import FoodItem from "./FoodItem"; // Make sure this file exists

export default function Filters() {
  return (
    <main className="ernæringside">
      <section className="overskrift">
          <h1>Spis dig sundere</h1>
          <h2>Sundhed er valget på din tallerken</h2>
      </section>

      <section className="kategorier">
        <h3>Hvilken del af kroppen vil du styrke?</h3>
        <h4>Vælg op til 3 kategorier og tryk på filter</h4>

        <div className="kategori-knapper">
          {["Hjertet", "Hjernen", "Metabolisme", "Muskler", "Fordøjelse", "Huden", "Håret", "Knogler", "Øjnene"].map((kategori) => (
            <button key={kategori} className="kategori-knap">{kategori}</button>
          ))}
        </div>

        <button className="filterknap">Filter og se resultater</button>
      </section>

      <section className="madvarer">
        <FoodItem navn="Banan" kalorier="110" vitaminB12="130%" vitaminC="10%" vitaminA="5%" />
        <FoodItem navn="Æble" kalorier="110" vitaminB12="130%" vitaminC="10%" vitaminA="5%" />
        <FoodItem navn="Broccoli" kalorier="110" vitaminB12="130%" vitaminC="10%" vitaminA="5%" />
      </section>
    </main>
  );
}
