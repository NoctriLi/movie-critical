'use client'

import React, { useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const SearchPageInput = () => {
    const [searchText, setSearchText] = React.useState('')
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    return (
        <div className=" relative flex h-fit w-auto space-x-1 rounded text-xs text-foreground  ">
            <div className="relative hidden ease-in-out md:flex md:transition-transform">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={onSearch}
                    className="h-8 w-full bg-background text-xs text-foreground p-1 focus:border-white focus:outline-none shadow shadow-foreground"
                />
            </div>
            <Link
                href={pathname + '?' + createQueryString("keyword", searchText)}
                className=" mx-auto h-full w-fit border-s border-foreground px-2 py-1 shadow shadow-foreground"
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
            </Link>
        </div>
    )
}

export default SearchPageInput
