import Card from "@/components/Articles/Card";
import React from "react";
import Error from "./error";



async function getDataPost(params) {
    const res = await fetch(`https://gorest.co.in/public/v2/posts/${params}`);
      const statusCode = res.status > 200 ? res.status : false;
      const data = await res.json();
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
        ini detail articles hehe {params.slug}
        <Card data={data} />
      </div>
    );
}

