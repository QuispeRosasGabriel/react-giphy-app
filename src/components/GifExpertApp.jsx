import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([[""]]);

  return (
    <>
      <div>React Giph App</div>
      <br />
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      <ul>
        {categories.map((categoria, idx) => (
          <GifGrid categoria={categoria} key={idx}></GifGrid>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
