import React from "react";
import Search from "@/components/Articles/Search";
import Pagination from "@/components/Pagination";
import CardList from "@/components/Articles/CardList";


async function getDataPost() {
  const res = await fetch(
    `https://gorest.co.in/public/v2/posts/`
  );
  return res.json();
}

const Articles = async() => {
    const data = await getDataPost();

    return (
      <div>
        <Search />
        <div>
          <p>ini card list</p>
          {/* <CardList data={data} /> */}
          <Pagination data={data}/>
        </div>
      </div>
    );
}

export default Articles;