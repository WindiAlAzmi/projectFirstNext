'use client'
import React from "react";
import Link from "next/link";
import useArticlesStore from "@/store/articles";

const ButtonBack = () => {
    const { pageArticles } = useArticlesStore();

    return (
      <div className="w-full flex flex-wrap flex-row justify-end">
        <Link href={`/articles/pageNumber/${pageArticles}`} 
        className="bg-black font-bold p-2 w-[100px] text-center text-white rounded-lg">back</Link>
      </div>
    );
}
export default ButtonBack;