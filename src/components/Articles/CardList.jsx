'use client';
import React from "react";
import CardShortDetailArticle from "./CardShortDetailArticle";



const CardList = ({data}) => {
  return (
    <>
      {data && (
        <div className=" flex-wrap gap-2 flex flex-col md:flex-row md:justify-around  lg:flex-row w-full lg:justify-between">
          {data.map((dt) => (
            <CardShortDetailArticle key={dt.id} data={dt} />
          ))}
        </div>
      )}
    </>
  );

}

export default CardList;