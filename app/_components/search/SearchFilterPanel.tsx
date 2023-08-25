'use client'

import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SearchPageInput from './SearchPageInput'
import genres from '@/lib/genres'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const SearchFilterPanel = ({ list, onScroll, setSearchTerm }: any) => {
    const [options, setOptions] = useState({
        genre: '',
    })
    const [filtered, setFiltered] = useState(list)

    const applyFilter = () => {
        let filtered = list

        console.log(list)
        console.log(options.genre)

        if (options.genre) {
            filtered = filtered.filter(
                (item: any) => item.genre_ids?.includes(parseInt(options.genre))
            )
        }

        console.log(filtered)

        setFiltered(filtered)
    }

    useEffect(() => {
        applyFilter()
    }, [])

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOptions({ ...options, genre: e.target.value })
    }

    return (
        <div className="fixed h-full w-52 z-[100]  rounded bg-zinc-700 shadow-xl md:w-1/5 ">
            <div className="relative flex h-fit w-full flex-col">
                <Tabs defaultValue="all" className="w-[full] mx-auto">
                    <TabsList>
                        <TabsTrigger value="movie">Movies</TabsTrigger>
                        <TabsTrigger value="tv">TV</TabsTrigger>
                        <TabsTrigger value="people">People</TabsTrigger>
                        <TabsTrigger value="all">All</TabsTrigger>
                    </TabsList>
                    <TabsContent value="movie">
                        Change your password here.
                    </TabsContent>
                    <TabsContent value="tv">
                        Change your password here.
                    </TabsContent>
                    <TabsContent value="people">
                        Change your password here.
                    </TabsContent>
                    <TabsContent value="all">
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
                            <button onClick={() => applyFilter()}>Apply</button>
                        </div>
                    </TabsContent>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default SearchFilterPanel
