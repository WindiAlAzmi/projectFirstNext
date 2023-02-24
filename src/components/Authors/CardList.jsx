'use client';
import React from "react";
import ButtonAdd from "./ButtonAdd";
import CardShortDetailAuthor from "./CardShortDetailAuthor";



const CardList = ({data}) => {

  return (
    <div className="bg-red-300 border-3 text-200-red p-10">
      <div>
        <ButtonAdd/>
      </div>
      <div>
        <p>ini halaman utama bersama dengan add </p>

        <div>
          {data.map((dt) => (
            <CardShortDetailAuthor key={dt.id} data={dt} />
          ))}
        </div>
      </div>
    </div>
  );

}

export default CardList;