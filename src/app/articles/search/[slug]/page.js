import React from "react";
// import ResultSearch from "@/components/Articles/ResultSearch";
import CardList from "@/components/Articles/CardList";
import NoData from "@/components/NoData";
import Error from "./error";
// import Error from "./error";

async function getDataSearch() {

  const res = await fetch(
    `https://gorest.co.in/public/v2/posts/ `
  );
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  return {statusCode, data};

}

export default async function SearchPage ({params}) {
  const {data, statusCode} = await getDataSearch();
  const dataSearch = params.slug;
  
    const getSimilar =  (data) => {
      return data.filter((dt) => 
       dt.title.toString().toLowerCase().includes(dataSearch.toString().toLowerCase())

    )}
    
    if(statusCode) {
      return <Error error={statusCode} />
    }
    
    const filterData = getSimilar(data);

  return (
    <div className="bg-red-200">
      <p>data search</p>

      {filterData.length !== 0 ?  <CardList data={filterData} /> : 
  <NoData />}
    </div>
  );
};


