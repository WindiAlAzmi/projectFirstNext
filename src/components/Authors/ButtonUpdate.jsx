'use client'
import React from "react"
import Link from "next/link";

const ButtonUpdate = ({data}) => {
  
      return (
        <div className="w-full flex flex-wrap justify-center flex-row ">
          <Link
            href={`/authors/editFormAuthors/${data}`}
            className="bg-black text-white font-bold p-2 w-5/6 md:w-2/6 lg:w-[180px] text-center rounded-lg"
          >
            edit form
          </Link>
        </div>
      );
}

export default ButtonUpdate;