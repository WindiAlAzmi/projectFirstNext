'use client'
import Link from "next/link";
import React from "react";

const ButtonAdd = () => {

    return (
        
       <Link href={`/authors/formAuthors/`}>add author</Link>
    )
}

export default ButtonAdd;