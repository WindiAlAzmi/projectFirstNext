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
      <div>
      <p>ini author halaman search</p>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="cari post"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <button onClick={handlerButton}>kembali khome</button>
      </div>
    );
}

export default Search;