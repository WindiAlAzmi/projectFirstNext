'use client'
import React, {useEffect} from "react"

const CardDelete = ({data}) => {
     console.log(data, 'ini data id');

    useEffect(() => {
         const deleteData = async() => {
            const response = await fetch(
           `https://gorest.co.in/public/v2/users/${data.id}`,
           {
             method: "DELETE",
             headers: {
               Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
               Accept: "application/json",
               "Content-Type": "application/json",
             },
           }
         );

         }


         deleteData();
       
         console.log("delete response: ", response.json());  

    },[data])

    return (
        <div>ini delete</div>
    )
}

export default CardDelete