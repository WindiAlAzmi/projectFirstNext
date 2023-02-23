'use client';
import React from "react";
import CardShortDetail from "./CardShortDetail";



const CardList = ({data}) => {

  return (
    <div className="bg-gray-400">
      <div>
        {data && (
          <>
        
            {/* <div>{data.map((dt) => <Card key={dt.id} data={dt} />)}</div> */}
            <div>
              {data.map((dt) => (
                <CardShortDetail key={dt.id} data={dt} />
              ))}
            </div>
          </>
        )}
      </div>
    
    </div>
  );

}

export default CardList;