import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
        <div className="w-full flex flex-col items-center justify-around flex-wrap h-screen  text-2xl font-bold text-black text-center">
      <div className="capitalize">
        <p>data is not not found! </p>
      </div>
      <div className="w-full  flex flex-wrap justify-end">
        <Link href="/" className="p-2 rounded-lg">
          back to home
        </Link>
       </div>
    </div>
  );
}
