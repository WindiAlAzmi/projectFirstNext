import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="bg-red-200 p-4 text-black text-2xl w-full">
        ini home
        <ul>
          <li>
            <Link href={"/articles"} >
              go to articles
            </Link>
          </li>
          <li>
            <Link href={"/authors"}                                                                                                                                                                                                  >
              go to authors
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
