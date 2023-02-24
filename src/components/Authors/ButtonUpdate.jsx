'use client'
import React from "react"
import Link from "next/link";

const ButtonUpdate = ({data}) => {
  
      return (
        <div>
          <Link href={`/authors/editFormAuthors/${data}`}>edit form</Link>
    
        </div>
      );
}

export default ButtonUpdate;