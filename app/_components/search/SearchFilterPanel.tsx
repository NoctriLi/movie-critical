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

const SearchFilterPanel = ({ list, onScroll, setSearchTerm }: any) => {
  const [options, setOptions] = useState({
    genre: '',
  })
  const [filtered, setFiltered] = useState(list)

  const FormSchema = z.object({
    genres: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
    text: z.string().min(1, { message: 'Minimum 1 characters' }),
  })

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

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      genres: [],
      text: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-foreground">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="relative h-full w-full min-w-fit rounded bg-background shadow-xl md:fixed md:w-1/5 ">
      <div className="relative flex h-fit w-full flex-col">
        <Tabs defaultValue="all" className="mx-auto w-full">
          <TabsList>
            <TabsTrigger value="movie">Movies</TabsTrigger>
            <TabsTrigger value="tv">TV</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="movie">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keyword</FormLabel>
                      <FormControl>
                        <Input placeholder="Keyword" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter a keyword to search for.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="genres"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Sidebar</FormLabel>
                        <FormDescription>
                          Select the items you want to display in the sidebar.
                        </FormDescription>
                      </div>
                      {genres.movieGenres.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="genres"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.name)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.name,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.name
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.name}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="tv">Change your password here.</TabsContent>
          <TabsContent value="people">Change your password here.</TabsContent>
          <TabsContent value="all">
            <div className="relative flex h-full w-full flex-col p-2">
              <SearchPageInput setSearchTerm={setSearchTerm} />
            </div>

            <div className="relative flex h-full w-full flex-col p-2">
              <div className="text-foreground">Genre</div>
              <select value={options.genre} onChange={handleGenreChange}>
                <option value="">All</option>
                {genres.tvGenres.map((genre: any) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
              <Button onClick={() => applyFilter()}>Apply</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default SearchFilterPanel
