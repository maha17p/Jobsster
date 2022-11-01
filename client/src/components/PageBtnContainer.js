import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";

const PageBtnContainer = () => {
  const { page, numOfPages, totalJobs } = useStateValue();
  const { changePage } = useDispatchAction();
  const pageNumber = [];
  for (let i = 1; i < numOfPages + 1; i++) {
    pageNumber.push(i);
  }

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };

  return (
    <>

    {numOfPages > 1 && <div className="flex items-center justify-center py-4 ">
      <div className="flex items-center justify-around w-80 bg-white rounded-md px-2 py-2">
        <button onClick={prevPage} className="bg-bgColor px-4 py-1" >
          <HiChevronDoubleLeft />
        </button>
        <div className="space-x-2">
          {pageNumber.map((pageNum) => {
           
            return (
              <button
                className={`${pageNum === page && "bg-priFmary text-secondary rounded-md"} px-2 font-semibold ` }
                key={pageNum}
                onClick={() => changePage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
        <button onClick={nextPage} className="bg-bgColor px-4 py-1" >
          <HiChevronDoubleRight />
        </button>
      </div>
    </div>}
    </>
  );
};

export default PageBtnContainer;
