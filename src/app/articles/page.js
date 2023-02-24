import React from "react";
import Search from "@/components/Articles/Search";
import DefaultArticles from "@/components/Articles/DefaultArticles";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow, formatISO } from "date-fns";

async function getDataPost() {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/ `, {
    method: "GET",
    headers: {
      Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
      Accept: "application/json",
      "Content-Type": "application/json",
      next: { revalidate: 10 },
    },
  });

    const imageGenerate = faker.image.technics();
    const dateArticle = new Date();
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

const Articles = async () => {
  const data = await getDataPost();

  return (
    <main>
      <div className="bg-green-800  p-2 flex flex-col gap-3 text-black w-full">
        <Search />
          <DefaultArticles data={data} />
      </div>
    </main>
  );
};

export default Articles;
