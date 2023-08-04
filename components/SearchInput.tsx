"use client";

import React from "react";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };



    return (
        <div className="flex flex-col relative gap-0 min-w-[100px] h-fit text-white text-xs rounded shadow ">
            <div className="relative">
                <input type="text" placeholder="Search" value={searchTerm} onChange={onSearch}/>

            </div>
        </div>
    );

    };

export default SearchInput;