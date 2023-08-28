'use client'

import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SearchPageInput from './SearchPageInput'
import genres from '@/lib/genres'

const SearchPageResults = ({ list, onScroll, setSearchTerm }: any) => {
    return (
        
            <div
                onScroll={onScroll}
                className=" relative h-fit w-full  bg-opacity-100 md:ms-[20%] "
            >
                <div className="relative mx-auto flex h-max min-h-screen w-full min-w-[300px] flex-wrap pt-10 shadow md:w-3/4">
                    {list.length > 0 ? (
                        list.map((item: any, index: number) => (
                            <ItemCard key={index} item={item} />
                        ))
                    ) : (
                        <div className="text-foreground mx-auto">
                            <h1>No Results!</h1>
                        </div>
                    )}
                </div>
            </div>
       
    )
}

export default SearchPageResults
