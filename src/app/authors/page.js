"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AuthorSearch from "./authorSearch";

const Authors = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handlerButton = () => {
    console.log("berhasil");
    router.push("/");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const inputSearch = e.target[0].value;
    setSearch(inputSearch);
    console.log(search);
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <input type="text" placeholder="cari post" />
      </form>
      {search && <AuthorSearch search={search} />}
      <button onClick={handlerButton}>kembali k home</button>
    </div>
  );
};

export default Authors;
