'use client'

import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SearchPageInput from './SearchPageInput'
import genres from '@/lib/genres'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from '@/components/ui/use-toast'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { ScrollArea } from '@/components/ui/scroll-area'
const SearchFilterPanel = ({ setSearchType }: any) => {




  return (
    <div className="relative h-full w-full min-w-fit rounded bg-background shadow p-2 shadow-foreground md:fixed md:w-1/5">
      <div className="relative flex h-full w-full flex-col">
        <h1 className="text-foreground">Search</h1>
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
