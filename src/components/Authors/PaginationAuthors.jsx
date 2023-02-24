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
    <div>
      ini Pagination author
      <CardList data={data} />
      <div>
        <p>ini tombol next dan before</p>
        <ul>
        {page !== 1 &&
          <li className=" col-start-1 ">
            <Link href={`/authors/pageNumber/${ page - Number(1)}`}>
              prev page {  page - 1}
            </Link>
          </li>
        }

        {page !== 9 &&  
          <li className="col-start-2  md:col-start-3">
            <Link href={`/authors/pageNumber/${page + Number(1)}`}>
              next page {page + 1}
            </Link>{" "}
          </li>
        }
        </ul>
      </div>
    </div>
  );
};

export default PaginationAuthors;
