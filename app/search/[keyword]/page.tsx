"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import ItemCard from "@/app/_components/search/ItemCard";

interface Props {

  


  params: { keyword: string };

}

const Page: React.FC<Props> = ({ params }: { params: { keyword: string } }) => {
  const keyword = params.keyword;

  const [page, setPage]= useState({currPage: 1});
  const [totalPage, setTotalPage] = useState(2);
  const [list, setList]:  any[]  = useState([]);

  const onScroll = () => {
    if(window.scrollY + window.innerHeight === document.body.scrollHeight && page.currPage < totalPage){
      console.log("bottom")
      const timer = setTimeout(() => {

      setPage({
        currPage: page.currPage + 1,
      });
    }, 500);

    return () => clearTimeout(timer);
    }   


    // if (listInnerRef.current) {
    //   const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    //   console.log(scrollTop, scrollHeight, clientHeight);
    //   if (scrollTop + clientHeight === scrollHeight && page.currPage < totalPage) {
    //     setPage({
    //       currPage: page.currPage + 1,
    //       prevPage: page.currPage,
    //       totalPage: totalPage,
    //     });
    //   }
    // }
  };
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }
  , [page.currPage]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/search/${keyword}/${page.currPage}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data : any = await res.json();
      if (data) {
        setList((prev: any) => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
      }
    };
    fetchData();
  }, [page.currPage]);

  return (
    <div
      onScroll={onScroll}
      className="relative h-fit w-screen bg-zinc-900 "
    >
      <div className="relative flex flex-wrap mx-auto pt-10 min-w-[300px] w-full md:w-3/4 h-max min-h-screen shadow">
        {list.map((item: any, index: number) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Page;
