'use client'

import React, { useEffect } from 'react'
import SearchBarResults from './SearchBarResults'
import Link from 'next/link'

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([]) // <-- new
  const [searchActive, setSearchActive] = React.useState(false) // <-- new

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
  }
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const getResults = async () => {
      const response = await fetch(`/api/search/all/${searchTerm}/1`)
      const results = await response.json()
      const sliced = results.results.slice(0, 5)
      setSearchResults(sliced)
    }
    if (searchTerm.length > 0) {
      timeoutId = setTimeout(() => {
        getResults()
      }, 500)
    } else {
      setSearchResults([])
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchTerm])

  return (
    <div
      onFocus={() => setSearchActive(true)}
      className=" relative flex h-fit w-auto space-x-1 rounded text-xs text-foreground shadow shadow-foreground "
    >
      <div className="relative hidden ease-in-out md:flex md:transition-transform">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={onSearch}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setTimeout(() => setSearchActive(false), 200)}
          className="h-8 w-full bg-background p-1 text-xs  focus:border-background focus:outline-none"
        />
      </div>
      <Link
      prefetch={false}
        href={`/search?keyword=${searchTerm}`}
        className=" mx-auto h-full w-fit border-s border-background px-2 py-1"
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
      {searchActive && searchResults.length > 0 && (
        <SearchBarResults
          results={searchResults}
          clearSearch={() => clearSearch()}
        />
      )}
    </div>
  )
}

export default SearchInput
