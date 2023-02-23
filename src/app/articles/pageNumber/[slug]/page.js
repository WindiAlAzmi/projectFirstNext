import React from "react";
import Search from "@/components/Articles/Search";
import PaginationArticles from "@/components/Articles/PaginationArticles";
import NoData from "@/components/Articles/NoData";

async function getDataPost(params) {
   if (isNaN(params.slug) || params.slug > 20) {
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
      },
    }
  );
  // const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  return { data, page };
   }

}

const ArticlesPagination = async ({ params }) => {
  const { data, page } = await getDataPost(params);
  console.log(params.slug, "ini slug di articles/slug ");

  console.log(page, "ini page steelah render");
  console.log(data, "ini data di pagination");

  // if (statusCode) {
  //   return <Error error={statusCode} />;
  // }

  return (
    <div>
      {data !== null ? 
  
    <div>
      <Search />
      <div>
        <p>ini card list</p>
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
