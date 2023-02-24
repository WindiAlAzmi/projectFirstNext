import CardUpdate from "@/components/Authors/CardUpdate";
import React from "react";
import Error from "./error";

async function getDataUser(params) {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${params}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  return { statusCode, data };
}



export default async function EditFormAuthors ({params})  {
     const { data, statusCode } = await getDataUser(params.slug);
 


if (statusCode) {
  return <Error error={statusCode} />;
}
    return (
      <main>
        <CardUpdate data={data} />

      </main>
    );
};

