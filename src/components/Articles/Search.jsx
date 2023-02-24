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
      router.push(`/articles/search/${search}`);
    }


    return (
      <div className=" flex flex-col mt-8 items-center gap-2  ">
        <form
          onSubmit={searchHandler}
          className="w-full md:w-5/6 p-2 rounded-lg bg-white border border-pink-600"
        >
          <input
            type="text"
            placeholder="search articles..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mx-auto  outline-none"
          />
        </form>
        <div className="w-full  flex flex-row justify-end">
          <button
            onClick={handlerButton}
            className=" bg-black text-white font-bold p-2 w-[100px] text-center rounded-lg "
          >
            kembali
          </button>
        </div>
      </div>
    );
}

export default Search;