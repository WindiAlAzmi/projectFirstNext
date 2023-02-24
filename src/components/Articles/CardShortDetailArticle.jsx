'use client'
import React from "react";
import Link from "next/link";
import {AiOutlineClockCircle } from "react-icons/ai";

const CardShortDetailArticle = ({data}) => {
   console.log(data.id, "ini data id di short detail articles");
    return (
      <Link
        href={`/articles/detail/${data.id}`}
        className="bg-purple-200 p-1 box-border lg:p-2 w-full lg:bg-blue-600 md:p-2 md:w-2/6 lg:w-1/6 md:bg-green-200"
      >
        <div className="bg-yellow-400 flex-wrap h-full mb-2 lg:mb-0 w-full gap-2 lg:gap-0  p-4 flex flex-col align-items justify-center text-black lg:text-base text-sm">
          <div className="w-full  rounded-xl">
            <img
              src={`${data.image}`}
              alt="My External Image"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="w-full flex flex-row justify-start text-xs">
            <h4>{data.date}</h4>
          </div>
          <div className="w-full flex flex-row justify-center align-center font-semibold">
            <h3>{data.title.slice(0, 20)}</h3>
          </div>
          <div className="w-full flex flex-row justify-center ">
            <h3>{data.body.slice(0, 55)}</h3>
          </div>
          <div className="w-full flex flex-wrap flex-row justify-end gap-2 items-center">
            <div className=" ">
              <AiOutlineClockCircle />
            </div>
            <div className=" ">
              <h4> {Math.round(data.body.length / 100)} minutes</h4>
            </div>
          </div>
        </div>
      </Link>
    );
}

export default CardShortDetailArticle;