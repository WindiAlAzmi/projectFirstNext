import React from "react";
import Search from "@/components/Articles/Search";
import PaginationArticles from "@/components/Articles/PaginationArticles";
import NoData from "@/components/Articles/NoData";
import { faker } from "@faker-js/faker";
import { formatDistanceToNow, formatISO } from "date-fns";

async function getDataPost(params) {
  try {
    if (isNaN(params.slug) || params.slug > 20) {
      const page = 1;
      const data = null;
      return { page, data };
    } else {
      const page = params.slug ? Number(params.slug) : 1;

      const res = await fetch(
        `https://gorest.co.in/public/v2/posts?page=${page}&per_page=10 `,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
            Accept: "application/json",
            "Content-Type": "application/json",
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

  }catch(error){
     console.error("Error:", error);
     console.log("Digest:", error.digest);
  }
   

}

const ArticlesPagination = async ({ params }) => {
  const { data, page } = await getDataPost(params);




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
