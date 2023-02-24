import Card from "@/components/Articles/Card";
import React from "react";
import Error from "./error";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow, formatISO } from "date-fns";


async function getDataPost(params) {
    const res = await fetch(`https://gorest.co.in/public/v2/posts/${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
      const statusCode = res.status > 200 ? res.status : false;
      // const data = await res.json();
      const imageGenerate = faker.image.technics();
      const datePost = new Date();
      const distance = formatDistanceToNow(datePost);
      const oldData = await res.json();
  //  Math.round(oldData.body.length / 100);
     console.log(oldData.body, 'ini body');
      const data = {
        id: oldData.id,
        user_id: oldData.user_id,
        title: oldData.title,
        body: oldData.body,
        date: distance,
        image : imageGenerate,
        readTime:  Math.round(oldData.body.length / 100)
        

       
      };
      console.log(data, "ini new data");
    
      return { statusCode, data };
   
}

export default async function DetailArticle({params}) {

   const { data, statusCode } = await getDataPost(params.slug);
   console.log(data, "ini data di articles detail search ");


if (statusCode) {
  return <Error error={statusCode} />;
}
    return (
      <div>
        ini detail articles {params.slug}
        <Card data={data} />
      </div>
    );
}

