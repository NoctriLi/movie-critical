'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import SearchPageInput from '../_components/search/SearchPageInput'
import ItemCard from '@/app/_components/search/ItemCard'
import SearchPageResults from '../_components/search/SearchPageResults'
import SearchFilterPanel from '../_components/search/SearchFilterPanel'
import { useToast } from '@/components/ui/use-toast'


interface Props {
  params: { keyword: string }
}

const Page: React.FC<Props> = () => {
  const keywordParams = useSearchParams()
  const keyword = keywordParams.get('keyword') || ''
  console.log(keyword)
  const [searchType, setSearchType] = useState('all')
  console.log(searchType)

  const [page, setPage] = useState({ currPage: 1 })
  const [totalPage, setTotalPage] = useState(2)
  const [list, setList]: any[] = useState([])
  const [filtered, setFiltered] = useState(list)
  const [searchUrl, setSearchUrl] = useState(
    `/api/search/all/${keyword}/${page.currPage}`
  )
    const {toast} = useToast()

  function makeSearchUrl() {
    if (searchType === 'all') {
      setSearchUrl(`/api/search/all/${keyword}/${page.currPage}`)
    } else if (searchType === 'movie') {
      setSearchUrl(`/api/search/movie/${keyword}/${page.currPage}`)
    } else if (searchType === 'tv') {
      setSearchUrl(`/api/search/tv/${keyword}/${page.currPage}`)
    } else if (searchType === 'people') {
      setSearchUrl(`/api/search/people/${keyword}/${page.currPage}`)
    } else {
      toast({
        title: 'what?!',
        description: 'Invalid search type',
      })
    }
  }

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight === document.body.scrollHeight &&
      page.currPage < totalPage
    ) {
      console.log('bottom')
      const timer = setTimeout(() => {
        setPage({
          currPage: page.currPage + 1,
        })
      }, 500)

      return () => clearTimeout(timer)
    }
  }
  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [page.currPage])

  useEffect(() => {
    setList([])
    setPage({ currPage: 1 })
  }, [keyword, searchType])

  useEffect(() => {
    if (!keyword || keyword.length <= 0) return
    console.log(keyword, searchUrl)
    const fetchData = async () => {
      const res = await fetch(`${searchUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data: any = await res.json()
      if (data) {
        setList((prev: any) => [...prev, ...data.results])
        setTotalPage(data.total_pages)
      }
    }
    fetchData()
  }, [page.currPage, keyword, searchUrl])

  useEffect(() => {
    makeSearchUrl()
  }, [searchType])

  return (
    <div className="relative flex h-fit w-screen flex-col border-b-[13rem] border-zinc-950">
      <div className="flex flex-row justify-between rounded border-b border-black bg-zinc-900">
        <div className="flex flex-col ">
          <div className="text-white">Search</div>
          <div className="text-white">
            <h1>Movies, TV Shows, People</h1>
          </div>
        </div>
      </div>
      <SearchFilterPanel list={list} setSearchType={setSearchType} />
      <div className="sm: ps-1/5">
        {searchType && <SearchPageResults list={list} onScroll={onScroll} searchType={searchType} /> }
      </div>
    </div>
  )
}
export default Page
