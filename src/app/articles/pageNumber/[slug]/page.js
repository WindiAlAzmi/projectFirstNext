import React from "react";
import Search from "@/components/Articles/Search";
import PaginationArticles from "@/components/Articles/PaginationArticles";
import NoData from "@/components/Articles/NoData";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow, formatISO } from "date-fns";

async function getDataPost(params) {
   if (isNaN(params.slug) || params.slug >= 10) {
    console.log('masuk sini nan');
     const page = 1;
     const data = null;
     return {page, data};
   }else {
      const page = params.slug ? Number(params.slug) : 1;
  console.log(page, "ini adalah page");
  const res = await fetch(
    `https://gorest.co.in/public/v2/posts?page=${page}&per_page=20 `,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        "Content-Type": "application/json",
        next: {
          revalidate: 15, //isr revalidate
        },
      },
    }
  );
  const imageGenerate = faker.image.technics();
  const dateArticle = new Date();
  const distance = formatDistanceToNow(dateArticle);
  const oldData = await res.json();
  const data = oldData.map((dt) => {
    dt.date = distance;
    dt.image = imageGenerate;
    dt.readTime = Math.round(dt.body.length / 200);
    return dt;
  });
  return { data, page };
   }

}

const ArticlesPagination = async ({ params }) => {
  const { data, page } = await getDataPost(params);
  console.log(params.slug, "ini slug di articles/slug ");

  console.log(page, "ini page steelah render");
  console.log(data, "ini data di pagination");


  return (
    <div>
      {data !== null ? 
  
    <div>
      <Search />
      <div>
        <PaginationArticles page={page} data={data} />
      </div>
    </div>
    : <div>
      <NoData />
    </div>
      }
      </div>
  );
};

export default ArticlesPagination;
