import React from "react";
import { albumsData, songsData } from "../assets/assets/assets";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto hover:overflow-x-visible">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.mame}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto hover:overflow-x-visible">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.mame}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
