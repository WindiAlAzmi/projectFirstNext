"use client"
import React, {useState} from "react";
import { useRouter } from "next/navigation";

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');

        const handlerButton= () => {
        console.log('berhasil');
        router.push('/');
    }

    const searchHandler = (event) => {
      event.preventDefault();
      if(!search) return;
      router.push(`/articles/search/${search}`);
      console.log(search, "ini search");
    }


    return (
      <div>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="cari post"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <button onClick={handlerButton}>kembali k home</button>
      </div>
    );
}

export default Search;