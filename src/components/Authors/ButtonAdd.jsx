'use client'
import Link from "next/link";
import React from "react";

const ButtonAdd = () => {

    return (
      <div className="w-full flex flex-wrap flex-row justify-start">
        <Link
          href={`/authors/formAuthors/`}
          className="bg-blue-800 p-2 w-[100px] text-center rounded-lg"
        >
          add author
        </Link>
      </div>
    );
}

export default ButtonAdd;