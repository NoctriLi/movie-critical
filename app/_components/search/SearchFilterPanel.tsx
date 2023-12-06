'use client'

import React from 'react'

import SearchPageInput from './SearchPageInput'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const SearchFilterPanel = ({ setSearchType }: any) => {




  return (
    <div className="relative h-full w-full min-w-fit rounded bg-background shadow p-2 shadow-foreground md:fixed md:w-1/5">
      <div className="relative flex h-full w-full flex-col">

        <div className="relative flex h-auto w-full flex-col p-2">
          <SearchPageInput />
        </div>
        <Tabs defaultValue="all" className="mx-auto w-full">
          <TabsList>
            <TabsTrigger value="movie" onClick={() => setSearchType('movie')}>
              Movies
            </TabsTrigger>
            <TabsTrigger value="tv" onClick={() => setSearchType('tv')}>
              TV
            </TabsTrigger>
            <TabsTrigger value="people" onClick={() => setSearchType('people')}>
              People
            </TabsTrigger>
            <TabsTrigger value="all" onClick={() => setSearchType('all')}>
              All
            </TabsTrigger>
          </TabsList>      
        </Tabs>
      </div>
    </div>
  )
}

export default SearchFilterPanel
