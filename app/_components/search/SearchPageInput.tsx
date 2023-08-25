'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

const SearchPageInput = ({setSearchTerm}:any) => {
    const [searchText, setSearchText] = React.useState('')

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    return (
        <div className=" relative flex h-fit w-auto space-x-1 rounded text-xs text-white  ">
            <div className="relative hidden ease-in-out md:flex md:transition-transform">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={onSearch}
                    className="h-8 w-full bg-zinc-300 text-xs text-black focus:border-white focus:outline-none shadow shadow-black"
                />
            </div>
            <button
                onClick={()=>setSearchTerm(searchText)}
                className=" mx-auto h-full w-fit border-s border-white px-2 py-1 shadow shadow-black"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    )
}

export default SearchPageInput
