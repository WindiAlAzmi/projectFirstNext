"use client"
import React, {useState} from "react";
import { useRouter } from "next/navigation";

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');

        const handlerButton= () => {
        router.push('/');
    }

    const searchHandler = (event) => {
      event.preventDefault();
      if(!search) return;
      router.push(`/authors/search/${search}`);
    }


    return (
      <div className="bg-red-200 flex flex-col mt-8 items-center gap-2 md:bg-blue-300 lg:bg-gray-300 ">
        <form
          onSubmit={searchHandler}
          className="w-full md:w-5/6 p-2 rounded-lg bg-white"
        >
          <input
            type="text"
            placeholder="cari post"
            className="w-full mx-auto  outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="w-full bg-red-200 flex flex-row justify-end">
          <button
            onClick={handlerButton}
            className=" bg-blue-800 p-2 w-[100px] text-center rounded-lg "
          >
            kembali
          </button>
        </div>
      </div>
    );
}

export default Search;