"use client";
import React from "react";
import CardList from "./CardList";
import Link from "next/link";

const DefaultAuthors = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className=" flex flex-col ">
      <CardList data={data} />

      <ul className="w-full flex flex-row">
        <li className=" w-full flex flex-row justify-end">
          <Link
            href={`/authors/pageNumber/${Number(2)}`}
            className=" p-2 w-[100px] text-center rounded-lg"
          >
            next page{" "}
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default DefaultAuthors;
