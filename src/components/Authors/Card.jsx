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
    <div className="bg-pink-600 p-2 w-full">
      <div className="bg-yellow-400 w-full flex flex-col  justify-center ">
        <div className="bg-red-500 w-full md:w-3/6 mx-auto flex flex-row justify-center p-2">
          <img
            src="/image/defaultImg.jpg"
            alt="My External Image"
            className="w-1/2 rounded-full"
          />
        </div>
        <div className="bg-yellow-200 flex flex-col p-2 text-sm md:text-base">
          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3 className="break-words">name: </h3>
            </div>
            <div className="w-4/6">
              <h3> {data.name}</h3>
            </div>
          </div>

          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3>email: </h3>
            </div>
            <div className="w-4/6 bg-green-200">
              <h3 className="w-full break-words"> {data.email}</h3>
            </div>
          </div>

          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3>gender: </h3>
            </div>
            <div className="w-4/6">
              <h3> {data.gender}</h3>
            </div>
          </div>

          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3>status: </h3>
            </div>
            <div className="w-4/6">
              <h3> {data.status}</h3>
            </div>
          </div>

          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3>date: </h3>
            </div>
            <div className="w-4/6">
              <h3> {data.date}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 flex-wrap">
        <div className="font-bold text-base text-black">
          <h3>All Postingan</h3>
        </div>
        <div className="bg-blue-800 flex-wrap  flex flex-col md:flex-row lg:flex-row w-full ">
          {dataPost.map((dt) => (
            <CardShortDetailArticle key={dt.id} data={dt} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-0 md:flex-row w-full md:justify-between  bg-yellow-200">
        {/* <ButtonBack /> */}

        <ButtonUpdate data={data.id} />
        <ButtonDelete data={data.id} />
   
      </div>
    </div>
  );
}

export default Card;