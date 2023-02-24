'use client';
import React from "react";
import CardShortDetailArticle from "./CardShortDetailArticle";



const CardList = ({data}) => {

  return (
    <div className="bg-gray-400">
      <div>
        {data && (
          <>
        
            {/* <div>{data.map((dt) => <Card key={dt.id} data={dt} />)}</div> */}
            <div>
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