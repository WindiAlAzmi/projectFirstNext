'use client'
import React, {useState} from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthorStore from "@/store/authors";


const CardUpdate = ({data}) => {
    const router = useRouter();
     const [name, setName] = useState(data?.name);
     const [email, setEmail] = useState(data?.email);
     const [status, setStatus] = useState(data?.status);
        const { pageAuthor } = useAuthorStore();

     const editAuthorHandler = async (event) => {
       event.preventDefault();
       try {
         const response = await fetch(
           `https://gorest.co.in/public/v2/users/${data.id}`,
           {
             method: "PATCH",
             headers: {
               Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
               Accept: "application/json",
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               name,
               email,
               status,
             }),
           }
         );
        //  console.log("create authors response: ", response.json());
       } catch (error) {
         console.log("error update authors: ", error);
       } finally {
         setName("");
         setEmail("");
         setStatus("");
         router.push(`/authors/detail/${data.id}` );
       }
     };

     return (
       <div>
         <div className="text-center text-lg font-bold mt-4">
           <h3>form edit authors</h3>
         </div>
         <form
           onSubmit={editAuthorHandler}
           className="flex  p-4 flex-col gap-20"
         >
           <div className="w-full  text-lg  flex flex-wrap flex-row justify-center">
             <label className="w-2/6 p-4">name:</label>
             <input
               type="text"
               placeholder="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="w-4/6 outline-none p-4"
             />
           </div>
           <div className="w-full text-lg  flex flex-wrap flex-row justify-center">
             <label className="w-2/6 p-4">email:</label>
             <input
               type="text"
               placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-4/6 outline-none p-4"
             />
           </div>
           <div className="w-full  text-lg  flex flex-wrap flex-row justify-center">
             <label className="w-2/6 p-4">status:</label>
             <input
               type="text"
               placeholder="status"
               value={status}
               onChange={(e) => setStatus(e.target.value)}
               className="w-4/6 outline-none p-4"
             />
           </div>
           <div className="w-full flex flex-col   md:flex-row justify-center ">
             <div className="w-full flex flex-row flex-wrap mb-4 justify-center">
               <button
                 type="submit"
                 className="bg-black text-white p-2 md:w-[200px] w-5/6 text-center rounded-lg"
               >
                 update Author
               </button>
             </div>
             <div className="w-full flex flex-wrap flex-row justify-center">
               <Link
                 href={`/authors/detail/${data.id}`}
                 className="bg-black text-white p-2 md:w-[200px] w-5/6 text-center rounded-lg"
               >
                 back
               </Link>
             </div>
           </div>
         </form>
       </div>
     );
}

export default CardUpdate;