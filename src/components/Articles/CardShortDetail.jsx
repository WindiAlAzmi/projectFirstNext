'use client'
import React from "react";
import { Router } from "next/navigation";
import Link from "next/link";


const CardShortDetail = ({data}) => {
    return (
      <Link href={`/articles/${data.id}`}>
        <div className="bg-yellow-400">
          <div>user id : {data.user_id}</div>
          <div>title: {data.title}</div>
          <div>body: {data.body}</div>
        </div>
      </Link>
    );
}

export default CardShortDetail;