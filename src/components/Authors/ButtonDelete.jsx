"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useAuthorStore from "@/store/authors";

const ButtonDelete = ({data}) => {

      const router = useRouter();
       const { pageAuthor } = useAuthorStore();




   const deleteHandler = async (data) => {
    try{
        const response = await fetch(
        `https://gorest.co.in/public/v2/users/${data}`,
             {
               method: "DELETE",
               headers: {
                 Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
                 Accept: "application/json",
                 "Content-Type": "application/json",
               },
             }
           );
       
    }catch(error){
      // console.log("error delete authors: ", error);
    }finally{
      router.push(`/authors/pageNumber/${pageAuthor}`);

    }

  
   };

    return (

      <div className="w-full flex flex-wrap justify-center flex-row ">
          <button onClick={() => deleteHandler(data)}
          className="bg-black text-white font-bold p-2 w-5/6 md:w-2/6 lg:w-[180px] text-center rounded-lg"
          >delete data</button>


        </div>
    );
};

export default ButtonDelete;
