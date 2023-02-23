import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
       <h2>
        Page not found di page 
      </h2>
      <Link href="/authors">back to home</Link>
    </div>
  );
}
