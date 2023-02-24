'use client'
import React from "react";
import Link from "next/link";
import useAuthorStore from "@/store/authors";

const ButtonBack = () => {
    const {pageAuthor}  = useAuthorStore();

    return (
       <div className="w-full flex flex-wrap flex-row justify-end">
        <Link href={`/authors/pageNumber/${pageAuthor}`} className="bg-blue-800 p-2 w-[100px] text-center rounded-lg">back</Link>
      </div>
    );
}
export default ButtonBack;