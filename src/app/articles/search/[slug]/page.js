import React from "react";
import CardList from "@/components/Articles/CardList";
import NoData from "@/components/Articles/NoData";
import Error from "./error";
import ButtonBack from "@/components/Articles/ButtonBack";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow, formatISO } from "date-fns";

async function getDataSearch(searchData) {

  const res = await fetch(
    `https://gorest.co.in/public/v2/posts?title=${searchData} `,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const statusCode = res.status > 200 ? res.status : false;
    const imageGenerate = faker.image.technics();
    const dateArticle = new Date();
    const distance = formatDistanceToNow(dateArticle);
    const oldData = await res.json();
    const data = oldData.map((dt) => {
      dt.date = distance;
      dt.image = imageGenerate;
      dt.readTime = Math.round(dt.body.length / 200);
      return dt;
    });
  return {statusCode, data};

}

export default async function SearchPage ({params}) {
  const {data, statusCode} = await getDataSearch(params.slug);

    
    if(statusCode) {
      return <Error error={statusCode} />
    }
    
  return (
    <div className="bg-red-200">
      <p>data search</p>

      {data.length !== 0 ?  <CardList data={data} /> : 
    <NoData />}
    <ButtonBack />
    </div>
  );
};


