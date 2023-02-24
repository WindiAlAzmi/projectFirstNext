import React from "react";
import MainHome from "@/components/MainHome";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow} from "date-fns"


async function getAllArticles() {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
      Accept: "application/json",
      "Content-Type": "application/json",
      next: {
        revalidate: 15, //isr revalidate
      },
    },
  });
    const imageGenerate = faker.image.technics();
    const dateArticle =new Date();
    const distance = formatDistanceToNow(dateArticle);
   const data = await res.json();
   const newData = data.map((dt) => {
    dt.date = distance;
    dt.image = imageGenerate;
    dt.readTime = Math.round(dt.body.length / 200);
    return dt;
   });
   return newData;
  
}

async function getAllUser() {
  const res = await fetch(`https://gorest.co.in/public/v2/users/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
      Accept: "application/json",
      "Content-Type": "application/json",
      next: {
        revalidate: 15, //isr revalidate
      },
    },
  });

 
    const dateAuthor = new Date();
    const distance = formatDistanceToNow(dateAuthor);
    const data = await res.json();
    const newData = data.map((dt) => {
      dt.date = distance;
      return dt;
    });

       return newData;


}

export default async function Home() {
   const dataArticles = await getAllArticles();
  const dataUser = await getAllUser();
    

  return (
     <main>
      <MainHome dataArticles={dataArticles} dataUser={dataUser}/>
     </main>
  );
}
