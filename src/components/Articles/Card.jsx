import React from "react";
import ButtonBack from "./ButtonBack";

async function getDataComments(data) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${data.id}/comments`);
  return res.json();

}


async function getDataUser(data) {
  const res = await fetch(
    `https://gorest.co.in/public/v2/users/${data.user_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
}
    }
  );
  return res.json();
}


const Card = async({data}) => {
  
     if (!data) {
       return null; 
     }



   const dataComments = await getDataComments(data);
   const dataUser = await getDataUser(data);
  console.log(data, 'ini data di card');
  console.log(dataUser, 'ini data user di card');

    return (
      <div className="bg-pink-600 p-4">
        <p>ini data di detail card</p>
        <div className="bg-yellow-400">
          <div>user id : {data.user_id}</div>
          <div>title: {data.title}</div>
          <div>body: {data.body}</div>
        </div>
        <div>
          <p>ini data user</p>
          <div className="bg-yellow-400">
            <div>name : {dataUser.name}</div>
            <div>email: {dataUser.email}</div>
            <div>gender: {dataUser.gender}</div>
          </div>
        </div>
        <div className="bg-green-300">
          <p>ini comments dari post {data.id}</p>
          <div>
            {dataComments.map((dt) => (
              <div key={dt.id}>{dt.email}</div>
            ))}
          </div>
        </div>
        <ButtonBack />
      </div>
    );
}

export default Card;