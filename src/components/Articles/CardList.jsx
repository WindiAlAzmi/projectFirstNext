'use client';
import React from "react";
import CardShortDetailArticle from "./CardShortDetailArticle";



const CardList = ({data}) => {

  return (
    <div className="bg-gray-400 flex flex-col p-4">
      <div>
        {data && (
          <>
        
            {/* <div>{data.map((dt) => <Card key={dt.id} data={dt} />)}</div> */}
            <div className="bg-red-200 p-4 flex flex-col">
              {data.map((dt) => (
                <CardShortDetailArticle key={dt.id} data={dt} />
              ))}
            </div>
          </>
        )}
      </div>
    
    </div>
  );

}

export default CardList;