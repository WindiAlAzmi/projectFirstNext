'use client';
import React from "react";
import ButtonAdd from "./ButtonAdd";
import CardShortDetailAuthor from "./CardShortDetailAuthor";



const CardList = ({data}) => {

  return (
    <div className="flex flex-wrap flex-col  border-3 text-200-red p-2">
      <div className="w-full">
        <ButtonAdd />
      </div>
      <div>

        <div className="flex-wrap gap-2 flex flex-col md:flex-row md:justify-around  lg:flex-row w-full lg:justify-between">
          {data.map((dt) => (
            <CardShortDetailAuthor key={dt.id} data={dt} />
          ))}
        </div>
      </div>
    </div>
  );

}

export default CardList;