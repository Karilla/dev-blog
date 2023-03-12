import Link from 'next/link';
import Head from 'next/head';
import { getDirectories } from '@/utils/filemanager';
import { statSync, readdirSync, Dirent } from 'fs'

export default function Home({directories}) {
  console.log(directories)
  return (
    <>
    <Head>
      <h1>Mon blog</h1>
    </Head>
    <ul>
      {directories.map(directory=>
        <li>
          <Link href={`/blog/${directory}`}>
              <h3>{directory}</h3>
          </Link>
        </li>
      )}
    </ul>
    </>
  )
}

export function getStaticProps(){
  console.log("test");
  const directories = getDirectories('./articles');
  return{
    props:{
      directories,
    }
  }
}