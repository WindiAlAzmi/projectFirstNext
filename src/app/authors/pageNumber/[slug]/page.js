import React from "react";
import Search from "@/components/Authors/Search";
import PaginationAuthors from "@/components/Authors/PaginationAuthors";
import NoData from "@/components/Authors/NoData";

async function getDataAuthors(params) {
    if (isNaN(params.slug) || params.slug > 20) {
      console.log("masuk sini nan");
      const page = 1;
      const data = null;
      return { page, data };
    }else {
      const page = params.slug ? Number(params.slug) : 1;
      console.log(page, "ini adalah page author");
      const res = await fetch(
        `https://gorest.co.in/public/v2/users?page=${page}&per_page=20 `,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      return { data, page };
    }
  
}

const AuthorsPagination = async ({ params }) => {
  const { data, page} = await getDataAuthors(params);
  console.log(params.slug, "ini slug di authors/slug ");

  console.log(page, "ini page steelah render");


  return (
      <div>
      {data !== null ? 
    <div>
      <Search />
      <div>
        <p>ini card list</p>
        <PaginationAuthors page={page} data={data} />
      </div>
    </div>
    : <div>
      <NoData />
    </div>
      }
      </div>
  );
};

export default AuthorsPagination;
