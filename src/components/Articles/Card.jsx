import React from "react";

async function getDataComments(data) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${data.id}/comments`);
  return res.json();

}

const Card = async({data}) => {
  
     if (!data) {
       return null; 
     }



   const dataComments = await getDataComments(data);


    return (
      <div>
      <div className="bg-yellow-400">
        <div>user id : {data.user_id}</div>
        <div>title: {data.title}</div>
        <div>body: {data.body}</div>
      </div>
      <div className="bg-green-300">
      <p>ini comments dari post {data.id}</p>
        <div>{dataComments.map((dt) => (
          <div key={dt.id}>{dt.email}</div>
        ))}</div>
      </div>
     </div>
    );
}

export default Card;