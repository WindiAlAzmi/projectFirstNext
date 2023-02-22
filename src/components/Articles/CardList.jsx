
import React from "react";
import Card from "./Card";


const CardList = ({data}) => {

  return (
    <div>
      <div>
      {data && 
      <>
        <div>ini card list di  jsx</div>
       <div>{data.map((dt) => <Card key={dt.id} data={dt} />)}</div>
       </>
      }
      </div>
    </div>
  );

}

export default CardList;