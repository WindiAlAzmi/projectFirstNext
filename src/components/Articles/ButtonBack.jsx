'use client'
import React from "react";
import Link from "next/link";
import useArticlesStore from "@/store/articles";

const ButtonBack = () => {
    const { pageArticles } = useArticlesStore();

    console.log(pageArticles, 'ini page articles');
    return (
      <div>
        ini button
        <Link href={`/articles/pageNumber/${pageArticles}`}>kembali ke articles</Link>
      </div>
    );
}
export default ButtonBack;