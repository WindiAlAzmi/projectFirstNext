'use client'
import React from "react";
import Link from "next/link";



const CardShortDetailAuthor = ({data}) => {
    return (
      <Link
        href={`/authors/detail/${data.id}`}
        className=" p-1 box-border lg:p-2 w-full  md:p-2 md:w-2/6 lg:w-1/6 "
      >
        <div className=" flex-wrap h-full mb-2 lg:mb-0 w-full gap-2 lg:gap-0 flex flex-col align-items justify-center text-black lg:text-base text-sm">
          <div className="w-1/2 mx-auto justify-items-center ">
            <img
              src="/image/defaultImg.jpg"
              alt="My External Image"
              className="w-full rounded-full"
            />
          </div>
          <div className="w-full text-center text-black md:text-lg text-sm">
            {data.name}
          </div>
        </div>
      </Link>
    );
}

export default CardShortDetailAuthor;