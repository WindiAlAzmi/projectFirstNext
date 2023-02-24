'use client'
import React from "react";
import Link from "next/link";



const CardShortDetailAuthor = ({data}) => {
  console.log(data, 'ini data di cardshortdetail author');
    return (
      <Link href={`/authors/detail/${data.id}`}>
        <div className="bg-yellow-400 mb-20">
          <div>ini data card short detail</div>
          <div>name: {data.name}</div>
          <div>date: {data.date}</div>
          <div>
            <img
              src="/image/defaultImg.jpg"
              alt="My External Image"
              className="w-1/2"
            />
          </div>
        </div>
      </Link>
    );
}

export default CardShortDetailAuthor;