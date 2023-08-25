import React from 'react'
import SearchInput from './SearchInput'
import { ModeToggle } from '@/components/ui/DarkModeToggle'

const Navbar = () => {
    return (
        <nav className="cols-3 fixed z-[300] flex h-20 w-full flex-col bg-zinc-900 opacity-[80%] ">
            <div className="navpanel mx-2 flex basis-7/12 flex-row justify-center ">
                <div className="flex border-x border-white p-2 text-center align-middle ">
                    <h1 className="text-white px-5">Sign In</h1>
                    <div className='px-5 w-fit h-fit'>
                        <ModeToggle />
                    </div>
                </div>

                
                    <a
                        href="/"
                        className=" hidden overflow-hidden text-center text-3xl text-white md:block"
                    >
                        Movie Critical
                    </a>
                    <a
                        href="/"
                        className=" block overflow-hidden text-center text-3xl text-white md:hidden"
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
