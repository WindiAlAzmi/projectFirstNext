import React from "react";
import Search from "@/components/Authors/Search";
import DefaultAuthors from "@/components/Authors/DefaultAuthors";


async function getDataUser() {
  const res = await fetch(`https://gorest.co.in/public/v2/users/ `, {
    method: "GET",
    headers: {
      Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

const Authors = async () => {
  const data = await getDataUser();

  // const {url, data} = props;
  console.log(data, "ini data author di DEFAULT page");

  return (
    <div>
      <Search/>
      <div>
        <p>ini card default data dari authors </p>
        <DefaultAuthors data={data} />
      </div>
    </div>
  );
};

export default Authors;
