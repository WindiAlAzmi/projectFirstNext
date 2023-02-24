import React from "react";
import ButtonBack from "./ButtonBack";
import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";
import { formatDistanceToNow } from "date-fns";
import CardShortDetailAuthor from "../Authors/CardShortDetailAuthor";
import {  IoChatbubbleEllipsesOutline } from "react-icons/io5";



async function getDataComments(data) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${data.id}/comments`,
     {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        "Content-Type": "application/json",

      },
    }
  );
   const dateAuthor = new Date();
   const distance = formatDistanceToNow(dateAuthor);
   const oldData = await res.json();
   const dataNew = oldData.map((dt) => {
     dt.date = distance;
     return dt;
   });
  return dataNew;
}


async function getDataUser(data) {
  const res = await fetch(
    `https://gorest.co.in/public/v2/users/${data.user_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        "Content-Type": "application/json",

      },
    }
  );
  return res.json();
}


const Card = async({data}) => {
   const dataComments = await getDataComments(data);
  const dataUser = await getDataUser(data);


  return (
    <div className="p-4">
      <div className=" w-full gap-1 flex flex-col  justify-center ">
        <div className=" p-2 font-bold flex flex-row flex-wrap w-full">
          <div className="w-full">
            <h3 className="font-bold text-2xl"> {data.title.slice(1, 50)}</h3>
          </div>
        </div>
        <div className=" gap-1 flex mb-2 flex-row w-full justify-start items-center">
          <div className=" w-[80px]  flex flex-row justify-center">
            <img
              src="/image/defaultImg.jpg"
              alt="My External Image"
              className="w-full rounded-full"
            />
          </div>
          <div className="break-words flex-col text-xs md:text-base">
            <div className=" flex flex-row flex-wrap w-full">
              <div className="w-full">
                <h3> {dataUser.name}</h3>
              </div>
            </div>

            <div className="flex flex-row flex-wrap w-full">
              <div className="w-full ">
                <h3 className="w-full break-words"> {dataUser.email}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-6 w-full md:w-3/6 lg:h-84 mx-auto flex flex-row justify-center">
          <img
            src={`${data.image}`}
            alt="My External Image"
            className="w-full"
          />
        </div>
        <div className=" flex flex-col gap-1 text-sm md:text-base">
          <div className=" flex flex-row flex-wrap w-full">
            {/* <div className="w-2/6">
              <h3>body: </h3>
            </div> */}
            <div className="w-full ">
              <h3 className="w-full break-words"> {data.body}</h3>
            </div>
          </div>

          <div className="justify-start gap-3 flex flex-row flex-wrap w-full">
            <div className="">
              <h3>date: </h3>
            </div>
            <div className="">
              <h3> {data.date}</h3>
            </div>
          </div>

          <div className=" gap-3 justify-start flex flex-row flex-wrap w-full">
            <div className="">
              <h3>time read: </h3>
            </div>
            <div className="">
              <h3>{Math.round(data.body.length / 100)} minutes</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 flex-wrap justify-center">
    
        <div className=" flex-wrap justify-center gap-4 items-center flex flex-col  w-full ">
          <div className="font-bold w-full md:w-5/6 md:text-base text-sm text-black">
          <h3 className="text-left">{dataComments.length} Commments about this posts</h3>
        </div>
          {dataComments.map((dt) => (
            <div
              key={dt.id}
              className=" w-full md:w-5/6 flex flex-col text-sm md:text-base"
            >
              <div className="flex flex-row w-full">
                <div className=" flex flex-row flex-wrap w-full">
                  <div className="w-full">
                    <h3 className="font-bold text-sm md:text-base"> {dt.name}</h3>
                  </div>
                </div>
                <div className=" ">
                  <IoChatbubbleEllipsesOutline size="24" />
                </div>
              </div>
  
              <div className=" flex flex-row flex-wrap w-full">
                <div className="w-full">
                  <h3> {dt.body}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonBack />
    </div>
  );
}

export default Card;