"use client";
import React from "react";
import Link from "next/link";
import useAuthorStore from "@/store/authors";

const ButtonBackCard = () => {
  const { pageAuthor } = useAuthorStore();

  return (
        <div className="w-full flex flex-wrap flex-row ">
  <Link
    href={`/authors/pageNumber/${pageAuthor}`}
    className="bg-blue-800 p-2 w-5/6 md:w-2/6 lg:w-[180px] text-center rounded-lg"
  >
    back
  </Link>
</div>
  );
};
export default ButtonBackCard;

