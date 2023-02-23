import React from "react";
import ButtonBack from "./ButtonBack";

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

  return res.json();
}


// async function getDataUser(data) {
//   const res = await fetch(
//     `https://gorest.co.in/public/v2/users/${data.id}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
//         Accept: "application/json",
//         "Content-Type": "application/json",

//       },
//     }
//   );
//   return res.json();
// }


const Card = async({data}) => {
   const dataPost = await getDataPost(data);
  // const dataUser = await getDataUser(data);
  console.log(dataPost, "ini data post di author");
  // console.log(dataUser, "ini data author di author");

  return (
    <div className="bg-pink-600 p-4">
      <div>
        <p>ini data user</p>
        <div className="bg-yellow-400">
          <div>name : {data.name}</div>
          <div>email: {data.email}</div>
          <div>gender: {data.gender}</div>
        </div>
      </div>
      <div className="bg-green-300">
        <p>ini post dari user {data.id}</p>
        <div>
          {dataPost.map((dt) => (
            <div key={dt.id}>{dt.title}</div>
          ))}
        </div>
      </div>
      <ButtonBack />
    </div>
  );
}

export default Card;