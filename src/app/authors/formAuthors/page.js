'use client';
import React, {useState} from "react";
import { useRouter } from "next/navigation";

const AddAuthors = () => {
    const router = useRouter();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");

    const createAuthorHandler = async (event) => {
          event.preventDefault();
        try {
            const response = await fetch(
              "https://gorest.co.in/public/v2/users",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer 3901252ea8565bf3bec602d886ce2d69ddb24a9b56d45943d8c9835cdb75447c`,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  gender,
                  status,
                }),
              }
            );
  

        }catch(error){
               console.log("error creating authors: ", error);

        }finally{
            setName('');
            setEmail('');
            setGender('');
            setStatus('');
            router.push('/authors');

        }
    }

    return (
      <div className="mb-20">
        <div>add more authors</div>
        <form onSubmit={createAuthorHandler} className="flex bg-yellow-300 p-4 flex-col gap-20">
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
            <label>gender:</label>
            <input
              type="text"
              placeholder="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
          <button type="submit" className="text-2xl text-left">Create Author</button>
        </form>
      </div>
    );
}

export default AddAuthors;