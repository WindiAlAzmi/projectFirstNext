"use client";
import React, {useEffect} from "react";
import CardList from "./CardList";
import Link from "next/link";
import useAuthorStore from "@/store/authors";

const PaginationAuthors = ({ data, page }) => {
    const { setPageAuthor } = useAuthorStore();


  useEffect(() => {
     if (page) {
    
       setPageAuthor(page);
     }
  }, [page])
 
  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <CardList data={data} />
      <div className="bg-red-800">
        <ul className="bg-blue-800 flex flex-row w-full justify-between">
          {page !== 1 && (
            <li className=" col-start-1 ">
              <Link
                href={`/authors/pageNumber/${page - Number(1)}`}
                className="rounded-lg font-bold text-white bg-blue-900  p-2"
              >
                prev page {page - 1}
              </Link>
            </li>
          )}

          {page !== 9 && (
            <li>
              <Link
                href={`/authors/pageNumber/${page + Number(1)}`}
                className="rounded-lg font-bold text-white bg-blue-900 p-2"
              >
                next page {page + 1}
              </Link>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PaginationAuthors;
