'use client'
import React, {useMemo} from "react"
import Link from "next/link";
import { Inter } from "@next/font/google";
import CardShortDetailArticle from "./Articles/CardShortDetailArticle";
import CardShortDetailAuthor from "./Authors/CardShortDetailAuthor";


const inter = Inter({ subsets: ["latin"] });

const MainHome = ({dataUser, dataArticles}) => {

  const dataUserSlice = useMemo(() => dataUser.slice(1, 5), [dataUser]);
  const dataArticlesSlice = useMemo(() => dataArticles.slice(1,5), [dataArticles]);

    return (
      <div className=" p-4 flex flex-col gap-3 text-black w-full">
        <div className="w-full flex flex-col gap-1 text-black lg:text-2xl text-sm">
          <div className=" w-full">
            <h3 className="text-lg font-bold  lg:text-4xl">ImYourBlog</h3>
          </div>
          <div className="">
            <h3 className=" w-full">an effecient platform to read and write</h3>
          </div>
        </div>
        <ul className="flex flex-col flex-wrap gap-3 ">
          <li className="flex flex-col flex-wrap gap-1 p-2 ">
            <div className=" gap-4 p-2 w-full flex flex-col justify-end text-sm font-semibold text-black">
              <div className="text-black font-semibold text-xs lg:text-base w-full  text-right">
                <Link href={"/articles"}>more all articles</Link>
              </div>
              <div className="text-black border md:text-2xl border-b-black font-semibold text-base w-full text-center">
                <h3>Articles...</h3>
              </div>
            </div>
            <div className=" flex-wrap gap-2 flex flex-col md:flex-row md:justify-around  lg:flex-row w-full lg:justify-between ">
              {dataArticlesSlice.map((dt) => (
                <CardShortDetailArticle key={dt.id} data={dt} />
              ))}
            </div>
          </li>
          <li className="flex flex-col flex-wrap gap-1 p-2 ">
            <div className="gap-4 p-2 w-full flex flex-col justify-end text-sm font-semibold text-black">
              <div className="text-black font-semibold text-xs lg:text-base w-full text-right">
                <Link href={"/authors"}>more authors</Link>
              </div>
              <div className="text-black border md:text-2xl border-b-black font-semibold text-base w-full text-center">
                <h3>Authors...</h3>
              </div>
            </div>
            <div
              className="flex-wrap gap-2 flex flex-col md:flex-row md:justify-around  lg:flex-row w-full lg:justify-between "
            >
              {dataUserSlice.map((dt) => (
                <CardShortDetailAuthor key={dt.id} data={dt} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    );
}

export default MainHome;