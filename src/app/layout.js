'use client'
import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <section className="bg-purple-200 w-full p-4">
          <nav className="bg-red-300 w-full lg:text-2xl md:text-lg gap-4 flex p-2 flex-row justify-around align-items ">
            <div className="bg-purple-200 p-2 flex flex-row align-items w-2/6">
              <h3 className="text-xs md:text-lg lg:text-3xl text-black ">ImYourBlog</h3>
            </div>
            <ul className="w-4/6 text-black text-xs md:text-base lg:text-2xl p-2 flex flex-row justify-end gap-4 align-items bg-yellow-200">
              <li className=" ">
                <Link href={"/articles"}>articles</Link>
              </li>
              <li className="">
                <Link href={"/authors"}>authors</Link>
              </li>
            </ul>
          </nav>
          {children}
          <footer className="bg-red-300 w-full p-4 text-black text-sm mx-auto text-center">
            <h3>Im your blog @ 2023</h3>
          </footer>
        </section>
      </body>
    </html>
  );
}
