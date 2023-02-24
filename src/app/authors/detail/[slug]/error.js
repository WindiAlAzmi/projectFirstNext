"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
      <div className="w-full flex flex-col items-center justify-around flex-wrap h-screen bg-green-800 text-2xl font-bold text-black text-center">
      <div className="bg-red-800 capitalize">
        {error ? <p>data could not be loaded !</p>
      : <p>page not found sorry</p>}
      </div>
      <div className="w-full bg-blue-900 flex flex-wrap justify-end">
        <Link href="/" className="bg-blue-800 p-2 rounded-lg">
          back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
