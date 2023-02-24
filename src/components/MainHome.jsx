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
      <div>
        <div className="bg-yellow-200 p-4 text-black text-2xl w-full">
          ini home
          <ul className="flex flex-col gap-20 bg-red-200">
            <li>
              <div>
                <Link href={"/articles"}>go to articles</Link>
                <div>
                  {dataArticlesSlice.map((dt) => (
                    <CardShortDetailArticle key={dt.id} data={dt} />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div>
                <Link href={"/authors"}>go to authors</Link>
                <div>
                  {dataUserSlice.map((dt) => (
                      <CardShortDetailAuthor key={dt.id} data={dt} />
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default MainHome;