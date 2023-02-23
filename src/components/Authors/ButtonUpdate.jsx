'use client'
import React from "react"
import Link from "next/link";

const ButtonUpdate = ({data}) => {
  
      console.log(data, "ini data di button update");
      return (
        <div>
          <Link href={`/authors/editFormAuthors/${data}`}>edit form</Link>
    
        </div>
      );
}

export default ButtonUpdate;