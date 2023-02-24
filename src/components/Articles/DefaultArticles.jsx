"use client";
import React from "react";
import CardList from "./CardList";
import Link from "next/link";

const DefaultArticles = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="bg-blue-700  flex flex-col ">
      <CardList data={data} />

      <ul className="w-full bg-green-200 flex flex-row">
        <li className=" w-full flex flex-row justify-end">
          <Link
            href={`/articles/pageNumber/${Number(2)}`}
            className="bg-blue-800 p-2 w-[100px] text-center rounded-lg"
          >
            next page{" "}
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default DefaultArticles;
