import React from "react";
import Card from "./Card";

const ResultSearch = ({searchData}) => {
    console.log(searchData, 'ini di results search');
    return (
      <div>
        <p>ini hasil search : </p>
     
           <Card data={searchData}/>
        
      </div>
    );
}

export default ResultSearch;