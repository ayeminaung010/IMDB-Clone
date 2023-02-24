"use client"
import {MdLightMode} from 'react-icons/md';
import {BsMoonStarsFill} from 'react-icons/bs'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function DarkModeSwitcher() {

    const {systemTheme, theme , setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);
  return (
    <div>
        { mounted && (currentTheme === 'dark'? (<MdLightMode onClick={() => setTheme('light')} className=' text-2xl cursor-pointer hover:text-amber-500' />) : (<BsMoonStarsFill onClick={() => setTheme('dark')} className=' text-2xl cursor-pointer hover:text-amber-500'/>))}
    </div>
  )
}
