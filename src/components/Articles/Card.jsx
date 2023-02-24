import React from "react";
import ButtonBack from "./ButtonBack";
import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";
import { formatDistanceToNow } from "date-fns";
import CardShortDetailAuthor from "../Authors/CardShortDetailAuthor";

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
    <div className="bg-pink-600 p-4">
      <div className="bg-yellow-400 w-full flex flex-col  justify-center ">
        <div className="bg-red-500 w-full md:w-3/6 mx-auto flex flex-row justify-center p-2">
          <img
            src={`${data.image}`}
            alt="My External Image"
            className="w-1/2"
          />
        </div>
        <div className="bg-yellow-200 flex flex-col p-2 text-sm md:text-base">
          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3 className="break-words">title: </h3>
            </div>
            <div className="w-4/6">
              <h3> {data.title}</h3>
            </div>
          </div>

          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3>body: </h3>
            </div>
            <div className="w-4/6 bg-green-200">
              <h3 className="w-full break-words"> {data.body}</h3>
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

          <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
            <div className="w-2/6">
              <h3>time read: </h3>
            </div>
            <div className="w-4/6">
              <h3>{Math.round(data.body.length / 100)} minutes</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 flex-wrap">
        <div className="font-bold text-base text-black">
          <h3>Data Author</h3>
        </div>
        <div className="bg-blue-800 flex-wrap  flex flex-col md:flex-row lg:flex-row w-full ">
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
                  <h3> {dataUser.name}</h3>
                </div>
              </div>

              <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                <div className="w-2/6">
                  <h3>email: </h3>
                </div>
                <div className="w-4/6 bg-green-200">
                  <h3 className="w-full break-words"> {dataUser.email}</h3>
                </div>
              </div>

              <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                <div className="w-2/6">
                  <h3>gender: </h3>
                </div>
                <div className="w-4/6">
                  <h3> {dataUser.gender}</h3>
                </div>
              </div>

              <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                <div className="w-2/6">
                  <h3>status: </h3>
                </div>
                <div className="w-4/6">
                  <h3> {dataUser.status}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 flex-wrap justify-center">
        <div className="font-bold text-base text-black">
          <h3>All Commments about this posts</h3>
        </div>
        <div className="bg-blue-800 flex-wrap justify-center items-center flex flex-col p-4  w-full ">
          {dataComments.map((dt) => (
            
              <div key={dt.id} className="bg-yellow-200 w-full md:w-5/6 flex flex-col p-2 text-sm md:text-base">
                <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                  <div className="w-2/6">
                    <h3 className="break-words">name: </h3>
                  </div>
                  <div className="w-4/6">
                    <h3> {dt.name}</h3>
                  </div>
                </div>

                <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                  <div className="w-2/6">
                    <h3>email: </h3>
                  </div>
                  <div className="w-4/6 bg-green-200">
                    <h3 className="w-full break-words"> {dt.email}</h3>
                  </div>
                </div>

                <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                  <div className="w-2/6">
                    <h3>body: </h3>
                  </div>
                  <div className="w-4/6">
                    <h3> {dt.body}</h3>
                  </div>
                </div>

                <div className="bg-green-800 p-2 flex flex-row flex-wrap w-full">
                  <div className="w-2/6">
                    <h3>date: </h3>
                  </div>
                  <div className="w-4/6">
                    <h3> {dt.status}</h3>
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