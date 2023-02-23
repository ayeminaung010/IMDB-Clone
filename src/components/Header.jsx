import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex justify-between items-center  max-w-5xl py-5 sm:mx-auto">
      <div className=" flex ">
        <MenuItem title={'HOME'} address='/' Icon={AiFillHome} />
        <MenuItem title={'ABOUT'} address='/about' Icon={AiFillInfoCircle} />
      </div>
      <div className="">
        <Link href='/'>
            <h2>
                <span className=" bg-amber-500 text-bold  py-1 px-2 rounded-lg ">IMDB</span>
                <span className=" text-lg hidden  sm:inline">Clone</span>
            </h2>
        </Link>
      </div>
    </div>
  )
}
