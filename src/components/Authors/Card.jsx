import React from "react";
import ButtonBack from "./ButtonBack";
import ButtonDelete from "./ButtonDelete";
import ButtonUpdate from "./ButtonUpdate";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow, formatISO } from "date-fns";
import CardShortDetailArticle from "../Articles/CardShortDetailArticle";

async function getDataPost(data) {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${data.id}/posts`,
     {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        ContentType: "application/json",

      },
    }
  );

   const imageGenerate = faker.image.technics();
   const dateArticle = new Date();
   const distance = formatDistanceToNow(dateArticle);
   const oldData = await res.json();
   const newData = oldData.map((dt) => {
     dt.date = distance;
     dt.image = imageGenerate;
     dt.readTime = Math.round(dt.body.length / 200);
     return dt;
   });

   return newData;
}

const Card = async({data}) => {
   const dataPost = await getDataPost(data);


  return (
    <div className="bg-pink-600 p-4">
      <div>
        <p>ini data user</p>
        <div className="bg-yellow-400">
          <div>name : {data.name}</div>
          <div>email: {data.email}</div>
          <div>gender: {data.gender}</div>
          <div>status: {data.status}</div>
          <div>date: {data.date}</div>
          <div>
            <img
              src="/image/defaultImg.jpg"
              alt="My External Image"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="bg-green-300">
        <p>ini post dari user {data.id}</p>
        <div>
          {dataPost.map((dt) => (
             <CardShortDetailArticle key={dt.id} data={dt} />
          ))}
        </div>
      </div>
      <ButtonBack />
      <ButtonUpdate data={data.id} />
      <ButtonDelete data={data.id} />
    </div>
  );
}

export default Card;