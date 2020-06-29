import React, { useState } from "react";
import AddCategory from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    ["One Puch", "Samurai X", "Dragon Ball"],
  ]);

  //   const handleAddCategory = () => {
  //     setCategories([...categories, "Naruto"]);
  //   };

  return (
    <>
      <div>React Giph App</div>
      <br />
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      <ul>
        {categories.map((categoria, idx) => (
          <li key={idx}>{categoria}</li>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
