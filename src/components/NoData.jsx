'use client'
import React from "react";
import { useRouter } from "next/navigation";

const NoData = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/articles')
    }
    return (
        <div>
         ga ada data 
         <button onClick={handleBack} >kembali ke halaman search</button>
        </div>
    )
}

export default NoData;