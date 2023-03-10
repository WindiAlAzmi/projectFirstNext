import React from "react";
import Search from "@/components/Authors/Search";
import PaginationAuthors from "@/components/Authors/PaginationAuthors";
import NoData from "@/components/Authors/NoData";
import { formatDistanceToNow } from "date-fns";

async function getDataAuthors(params) {
    if (isNaN(params.slug) || params.slug >= 10) {
      console.log("masuk sini nan");
      const page = 1;
      const data = null;
      return { page, data };
    }else {
      const page = params.slug ? Number(params.slug) : 1;
      const res = await fetch(
        `https://gorest.co.in/public/v2/users?page=${page}&per_page=10 `,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
            Accept: "application/json",
            "Content-Type": "application/json",
            next : {
              revalidate : 2 //isr revalidate
            }
          },
        }
      );

       const dateAuthor = new Date();
       const distance = formatDistanceToNow(dateAuthor);
       const oldData = await res.json();
       const data = oldData.map((dt) => {
         dt.date = distance;
         return dt;
       });
       console.log(data, "ini new data");
      return { data, page };
    }
  
}

const AuthorsPagination = async ({ params }) => {
  const { data, page} = await getDataAuthors(params);



  return (
      <div className="mb-8">
      {data !== null ? 
    <div>
      <Search />
      <div>
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
