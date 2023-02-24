import Card from "@/components/Authors/Card";
import React from "react";
import Error from "./error";
import { formatDistanceToNow } from "date-fns";


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

        const dateAuthor = new Date();
        const distance = formatDistanceToNow(dateAuthor);
        const oldData = await res.json();
          const data = {
            id: oldData.id,
            name: oldData.name,
            email: oldData.email,
            gender: oldData.gender,
            status: oldData.status,
            date: distance,
          };
        console.log(data, "ini new data");

      return { statusCode, data };
   
}

export default async function DetailArticle({params}) {

   const { data, statusCode } = await getDataUser(params.slug);
   console.log(data, "ini data di user detail search ");


if (statusCode) {
  return <Error error={statusCode} />;
}
    return (
      <div>
        ini detail users {params.slug}
        <Card data={data} />
      </div>
    );
}

