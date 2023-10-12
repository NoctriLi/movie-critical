import React from 'react'
import SearchInput from './SearchInput'
import { ModeToggle } from '@/components/ui/DarkModeToggle'

const Navbar = () => {
  return (
    <nav className="cols-3 fixed z-[300] flex  h-20 w-full bg-secondary text-foreground opacity-[80%] ">
      <div className="mx-2 flex flex-row  justify-between items-center w-full ">
        <div className="items flex">
          <div className="h-fit w-fit px-5">
            <ModeToggle />
          </div>
        </div>

        <a
          href="/"
          className=" hidden overflow-hidden text-center text-3xl  md:block"
        >
          Movie Critical
        </a>
        <a
          href="/"
          className=" block overflow-hidden text-center text-3xl md:hidden"
        >
          M.Crit
        </a>

        <div className="flex p-2">
          <SearchInput />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
