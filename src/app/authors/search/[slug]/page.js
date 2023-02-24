import React from "react";
import CardList from "@/components/Authors/CardList";
import NoData from "@/components/Authors/NoData";
import Error from "./error";
import ButtonBack from "@/components/Authors/ButtonBack";
import { formatDistanceToNow} from "date-fns";


async function getDataSearch(searchData) {
  const res = await fetch(
    `https://gorest.co.in/public/v2/users?name=${searchData} `,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const statusCode = res.status > 200 ? res.status : false;
  const dateAuthor = new Date();
  const distance = formatDistanceToNow(dateAuthor);
  const oldData = await res.json();
  const data = oldData.map((dt) => {
    dt.date = distance;
    return dt;
  });
  console.log(data, "ini new data");

  return { statusCode, data };
}

export default async function SearchPage ({params}) {
  const {data, statusCode} = await getDataSearch(params.slug);

    if(statusCode) {
      return <Error error={statusCode} />
    }

  return (
    <div className="bg-red-200">
      <p>data search di author</p>

      {data.length !== 0 ?  <CardList data={data} /> : 
  <NoData />}
    <ButtonBack />
    </div>
  );
};


