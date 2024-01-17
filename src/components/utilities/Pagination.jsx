const Pagination = ({page, lastPage, setPage}) => {


    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop
    }

    
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop
    }
    return(
        <>
        <div className="flex justify-center items-center gap-3 text-color-primary text-xl">{page} of {lastPage}</div>
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            
           { page <= 1 ? null :
           <button className="flex items-center justify-center transition-all hover:text-color-accent" onClick={handlePrevPage}>
           <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
           </svg>
           Prev
       </button>
}
           
           { page >= lastPage ? null :
            <button className=" flex items-center justify-center transition-all hover:text-color-accent" onClick={handleNextPage}>
                Next
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
                </button>
           }
        </div>
        </>
    )
}

export default Pagination;