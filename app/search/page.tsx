'use client'
import { useEffect, useState} from 'react'

import { useSearchParams } from 'next/navigation'

import SearchPageResults from '../_components/search/SearchPageResults'
import SearchFilterPanel from '../_components/search/SearchFilterPanel'
import { useToast } from '@/components/ui/use-toast'

interface Props {
  params: { keyword: string }
}

const Page: React.FC<Props> = () => {
  const keywordParams = useSearchParams()
  const keyword = keywordParams.get('keyword') || ''
  const [searchType, setSearchType] = useState('all')
  const [page, setPage] = useState({ currPage: 1 })
  const [totalPage, setTotalPage] = useState(2)
  const [list, setList]: any[] = useState([])

  const [searchUrl, setSearchUrl] = useState(
    `/api/search/all/${keyword}/${page.currPage}`
  )
  const { toast } = useToast()

  

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY + window.innerHeight === document.body.scrollHeight &&
        page.currPage < totalPage
      ) {

        const timer = setTimeout(() => {
          setPage({
            currPage: page.currPage + 1,
          })
        }, 500)

        return () => clearTimeout(timer)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [page.currPage, totalPage])

  useEffect(() => {
    setList([])
    setPage({ currPage: 1 })
  }, [keyword, searchType])

  useEffect(() => {
    if (!keyword || keyword.length <= 0) return

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
  }, [page.currPage, searchUrl, keyword])

  useEffect(() => {
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
    makeSearchUrl()
  }, [searchType, keyword, page, toast])

  return (
    <div className="relative flex  w-screen flex-col border-b-[13rem] border-zinc-950">
      <div className="flex h-20 flex-col justify-between rounded border-b border-black bg-primary p-2 font-bold text-primary-foreground">
        <div>Search</div>

        <h1>Movies, TV Shows, People</h1>
      </div>

      <div>
        <SearchFilterPanel list={list} setSearchType={setSearchType} />
      </div>
      <div className="sm: ps-1/5">
        {searchType && (
          <SearchPageResults list={list} searchType={searchType} />
        )}
      </div>
    </div>
  )
}
export default Page
