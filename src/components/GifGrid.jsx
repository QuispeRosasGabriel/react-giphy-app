import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria, idx }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const key = "ASms80zfjCgo4lNx3YI3YqIUwlrfM5pt";
    const url = `https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=${key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <div>
      <h3>{categoria}</h3>
      {images.map((img) => (
        <GifGridItem {...img} key={img.id}></GifGridItem>
      ))}
    </div>
  );
};

export default GifGrid;
