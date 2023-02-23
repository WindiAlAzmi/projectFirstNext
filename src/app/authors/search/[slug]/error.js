"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      error data fetching search di users
      <button>
        <Link href="/">kembali ke home</Link>
      </button>
    </div>
  );
};

export default Error;
