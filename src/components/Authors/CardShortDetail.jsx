'use client'
import React from "react";
import Link from "next/link";


const CardShortDetail = ({data}) => {
    return (
      <Link href={`/authors/detail/${data.id}`}>
        <div className="bg-yellow-400 mb-20">
          <div>ini data card short detail</div>
          <div>name: {data.name}</div>
          <div>email: {data.email}</div>
        </div>
      </Link>
    );
}

export default CardShortDetail;