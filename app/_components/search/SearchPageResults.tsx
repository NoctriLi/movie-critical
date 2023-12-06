

import ItemCard from './ItemCard'


const SearchPageResults = ({ list, onScroll, searchType }: any) => {

    return (
        
            <div
                onScroll={onScroll}
                className=" relative h-fit w-full  bg-opacity-100 md:ms-[20%] "
            >
                <div className="relative mx-auto flex h-max min-h-screen w-full min-w-[300px] flex-wrap pt-10 shadow md:w-3/4">
                    {list.length > 0 ? (
                        list.map((item: any, index: number) => (
                            <ItemCard key={index} item={item} searchType={searchType} />
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
