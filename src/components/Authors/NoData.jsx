'use client'
import React from "react";
import { useRouter } from "next/navigation";

const NoData = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/authors')
    }
    return (
    <div className="w-full flex flex-col items-center justify-around flex-wrap h-screen bg-green-800 text-2xl font-bold text-black text-center">
        <div className="bg-red-800 capitalize">
          <p>data is not not found! </p>
        </div>
        <div className="w-full bg-blue-900 flex flex-wrap justify-end">
          <button className="bg-blue-800 p-2 rounded-lg" onClick={handleBack}>back</button>
        </div>
      </div>
    )
}

export default NoData;