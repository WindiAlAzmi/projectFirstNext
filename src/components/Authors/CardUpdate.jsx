'use client'
import React, {useState} from "react"
import { useRouter } from "next/navigation";

const CardUpdate = ({data}) => {
    const router = useRouter();
     const [name, setName] = useState(data?.name);
     const [email, setEmail] = useState(data?.email);
     const [status, setStatus] = useState(data?.status);

     const editAuthorHandler = async (event) => {
       event.preventDefault();
       console.log(name, email, status, "ini data form");
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
         console.log("create authors response: ", response.json());
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
       <div className="mb-20">
         <div>add more authors</div>
         <form
           onSubmit={editAuthorHandler}
           className="flex bg-yellow-300 p-4 flex-col gap-20"
         >
           <p>create authors</p>
           <div>
             <label>name:</label>
             <input
               type="text"
               placeholder="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
             />
           </div>
           <div>
             <label>email:</label>
             <input
               type="text"
               placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
           <div>
             <label>status:</label>
             <input
               type="text"
               placeholder="status"
               value={status}
               onChange={(e) => setStatus(e.target.value)}
             />
           </div>
           <button type="submit" className="text-2xl text-left">
             update Author
           </button>
         </form>
       </div>
     );
}

export default CardUpdate;