
import React from "react";
import Card from "./Card";
import CardShortDetail from "./CardShortDetail";


const CardList = ({data}) => {

  return (
    <div className="bg-gray-400">
      <div>
        {data && (
          <>
            <div>ini card list di jsx</div>
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