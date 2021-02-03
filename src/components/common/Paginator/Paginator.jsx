import React from "react";
import classes from "./Paginator.module.css";

const Paginator = (props) => {
  let { totalItemssCount, pageSize, currentPage, onPageChanged, delta } = props;
  let pagesCount = Math.ceil(totalItemssCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesForShow = pages.filter(
    (page) => page < currentPage + delta && page > currentPage - delta
  );

  return (
    <div>
      {currentPage >= delta + 1 && <span>{"... "}</span>}
      {pagesForShow.map((page) => (
        <span
          className={page === currentPage ? classes.selectedPage : ""}
          onClick={(e) => {
            onPageChanged(page);
          }}
        >
          {page + " "}
        </span>
      ))}
      {currentPage <= pagesCount - (delta + 1) && <span>...</span>}
    </div>
  );
};

export default Paginator;
