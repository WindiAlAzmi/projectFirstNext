'use client'
import React from "react";
import Link from "next/link";
import useAuthorStore from "@/store/authors";

const ButtonBack = () => {
    const {pageAuthor}  = useAuthorStore();

    return (
      <div>
        ini button
        <Link href={`/authors/pageNumber/${pageAuthor}`}>kembali ke authors</Link>
      </div>
    );
}
export default ButtonBack;