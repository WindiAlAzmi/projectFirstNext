import React from "react";
import Search from "@/components/Articles/Search";
import DefaultArticles from "@/components/Articles/DefaultArticles";

async function getDataPost() {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/ `, {
    method: "GET",
    headers: {
      Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

const Articles = async () => {
  const data = await getDataPost();

  // const {url, data} = props;
  console.log(data, "ini data di DEFAULT page");

  return (
    <div>
      <Search />
      <div>
        <p>ini card default data</p>
        <DefaultArticles data={data} />
      </div>
    </div>
  );
};

export default Articles;
