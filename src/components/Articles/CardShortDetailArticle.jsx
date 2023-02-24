'use client'
import React from "react";
import Link from "next/link";


const CardShortDetailArticle = ({data}) => {
    return (
      <Link href={`/articles/detail/${data.id}`}>
        <div className="bg-yellow-400 mb-20">
          <div>ini data card short detail</div>
          <div>title: {data.title}</div>
          <div>date: {data.date}</div>
          <div>time read : {Math.round(data.body.length / 100)} minutes </div>
          <div>
            <img
              src={`${data.image}`}
              alt="My External Image"
              className="w-1/2"
            />
          </div>
        </div>
      </Link>
    );
}

export default CardShortDetailArticle;