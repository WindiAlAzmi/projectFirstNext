"use client";
import React, {useEffect} from "react";
import CardList from "./CardList";
import Link from "next/link";
import useArticlesStore from "@/store/articles";

const Pagination = ({ data, page }) => {
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
    <div>
      ini Pagination
      <CardList data={data} />
      <div>
        <p>ini tombol next dan before</p>
        <ul>
        {page !== 1 &&
          <li className=" col-start-1 ">
            <Link href={`/articles/${ page - Number(1)}`}>
              prev page {  page - 1}
            </Link>
          </li>
        }

          <li className="col-start-2  md:col-start-3">
            <Link href={`/articles/${page + Number(1)}`}>
              next page {page + 1}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
