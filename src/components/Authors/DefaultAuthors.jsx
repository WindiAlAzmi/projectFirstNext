"use client";
import React from "react";
import CardList from "./CardList";
import Link from "next/link";

const DefaultAuthors = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      ini default articles
      <CardList data={data} />
      <div>
        <p>ini tombol next di halaman default articles</p>
        <ul>
          <li>
            <Link href={`/authors/pageNumber/${Number(2)}`}>next page </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultAuthors;
