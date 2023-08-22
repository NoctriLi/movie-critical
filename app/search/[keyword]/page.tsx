"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import ItemCard from "@/app/_components/search/ItemCard";

const Page = ({params}: {params:{keyword: string} }) => {
   const keyword = params.keyword;

  const listInnerRef = useRef(null);
  const [page, setPage] = useState({
    currPage: 1,
    prevPage: 0,
    totalPage: 0,
  });
  const [list, setList] = useState([]);
  

  const onScroll = () => {
   if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
         setPage({
            currPage: page.currPage + 1,
            prevPage: page.currPage,
            totalPage: page.totalPage,
         });
      }
   }
   };

   useEffect(() => {

      const fetchData = async () => {
         const res = await fetch(`/api/search/${keyword}/${page.currPage}`, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
            },        
         });
         const data = await res.json();
         if(data){
            setList([...list, ...data.results]);
            setPage({
               currPage: data.page,
               prevPage: data.page - 1,
               totalPage: data.total_pages,
            });
         } 
      };
      fetchData();
   }, [page.currPage]);
   


  return (
    <div onScroll={onScroll} ref={listInnerRef} className="relative flex h-full w-full">
      <div className="relative flex flex-col pt-10 px-5 space-y-5 w-full lg:w-9/12 h-fit mx-auto shadow">
         {list.map((item: any, index: number) => (
            <ItemCard key={index} item={item} />
         ))}


      </div>
    </div>
  );
};
export default Page;
