'use client'

import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SearchPageInput from './SearchPageInput'
import genres from '@/lib/genres'

const SearchPageResults = ({ list, onScroll, setSearchTerm }: any) => {
    const [options, setOptions] = useState({
        genre: '',
    })
    const [filtered, setFiltered] = useState(list)

    useEffect(() => {
        const applyFilter = () => {
            let filtered = list

            console.log(list)
            console.log(options.genre)

            if (options.genre) {
                filtered = filtered.filter(
                    (item: any) =>
                        item.genre_ids?.includes(parseInt(options.genre))
                )
            }

            console.log(filtered)

            setFiltered(filtered)
        }
        applyFilter()
    }, [options.genre, list])

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOptions({ ...options, genre: e.target.value })
    }

    return (
        <div className="relative flex h-full w-full">
            <div className="fixed h-full w-52  rounded bg-zinc-700 shadow-xl md:w-1/5 ">
                <div className="relative flex h-fit w-full flex-col">
                    <div className="relative flex h-full w-full flex-col p-2">
                        <SearchPageInput setSearchTerm={setSearchTerm} />
                    </div>

                    <div className="relative flex h-full w-full flex-col p-2">
                        <div className="text-white">Genre</div>
                        <select
                            value={options.genre}
                            onChange={handleGenreChange}
                        >
                            <option value="">All</option>
                            {genres.tvGenres.map((genre: any) => (
                                <option key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
            <div
                onScroll={onScroll}
                className="relative h-fit  w-full  bg-zinc-900 bg-opacity-100 md:ms-[20%] "
            >
                <div className="relative mx-auto flex h-max min-h-screen w-full min-w-[300px] flex-wrap pt-10 shadow md:w-3/4">
                    {filtered.length > 0 ? (
                        filtered.map((item: any, index: number) => (
                            <ItemCard key={index} item={item} />
                        ))
                    ) : (
                        <div className="text-white">
                            <h1>No Results!</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchPageResults
