import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/GetGifs";

const GifGrid = ({ categoria, idx }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(categoria).then((resp) => setImages(resp));
  }, []);

  return (
    <>
      <h3>{categoria}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id}></GifGridItem>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
