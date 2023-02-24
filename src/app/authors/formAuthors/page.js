'use client';
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthorStore from "@/store/authors";

const AddAuthors = () => {
    const router = useRouter();
        const { pageAuthor } = useAuthorStore();


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
      <main>
        <div className="text-center text-lg font-bold mt-4">
          <h3>form tambah authors</h3>
        </div>
        <form
          onSubmit={createAuthorHandler}
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
          <div className="w-full  text-lg  flex flex-wrap flex-row justify-center">
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
            <label className="w-2/6 p-4">gender:</label>
            <input
              type="text"
              placeholder="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
          <div className="w-full flex flex-col md:flex-row justify-center ">
            <div className="w-full flex flex-row flex-wrap mb-4 justify-center">
              <button
                type="submit"
                className=" p-2 w-5/6 md:w-[200px] text-center rounded-lg"
              >
                Add Author
              </button>
            </div>
            <div className="w-full flex flex-wrap flex-row justify-center">
              <Link
                href={`/authors/pageNumber/${pageAuthor}`}
                className=" p-2 w-5/6 md:w-[200px] text-center rounded-lg"
              >
                back
              </Link>
            </div>
          </div>
        </form>
      </main>
    );
}

export default AddAuthors;