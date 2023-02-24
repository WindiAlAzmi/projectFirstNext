"use client";
import React, {useEffect} from "react";
import CardList from "./CardList";
import Link from "next/link";
import useArticlesStore from "@/store/articles";

const PaginationArticles = ({ data, page }) => {
    const { setPageArticles } = useArticlesStore();


  useEffect(() => {
     if (page) {
    
       setPageArticles(page);
     }
  }, [page])
 
  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <CardList data={data} />
      <div className="">
        <ul className="flex flex-row w-full justify-between">
          {page !== 1 && (
            <li className=" col-start-1 ">
              <Link
                href={`/articles/pageNumber/${page - Number(1)}`}
                className="rounded-lg font-bold text-white bg-black  p-2"
              >
                prev page {page - 1}
              </Link>
            </li>
          )}

          {page !== 9 && (
            <li>
              <Link
                href={`/articles/pageNumber/${page + Number(1)}`}
                className="rounded-lg font-bold text-white bg-black p-2"
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

export default PaginationArticles;
