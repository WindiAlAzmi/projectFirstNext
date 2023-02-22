import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AuthorSearch({ search }) {
  console.log(search, "di data result searcg");
  const { data, error, isLoading } = useSWR(
    `https://gorest.co.in/public/v1/users/${search}`,
    fetcher
  );

  return (
    <div>
      ini hasil search {search}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
