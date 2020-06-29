import React, { useState } from "react";

const GifExpertApp = () => {
  //   const categories = ["One Puch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([
    ["One Puch", "Samurai X", "Dragon Ball"],
  ]);

  const handleAddCategory = () => {
    setCategories([...categories, "Naruto"]);
    console.log(categories);
  };

  return (
    <>
      <div>Categorias</div>
      <hr />
      <button onClick={handleAddCategory}>Agregar</button>
      <ul>
        {categories.map((categoria, idx) => (
          <li key={idx}>{categoria}</li>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
