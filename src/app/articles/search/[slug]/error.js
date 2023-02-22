"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      ini error dari search
      <button>
        <Link href="/">kembali ke home</Link>
      </button>
    </div>
  );
};

export default Error;
