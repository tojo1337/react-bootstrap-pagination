import { useState } from "react";
export default function Pagination({
  postPerPage,
  totalPosts,
  paginate,
}: {
  postPerPage: number;
  totalPosts: number;
  paginate: Function;
}) {
  //   We are using child to parent binding in here using paginate function
  //   Paginate function changes the index number of the page like 1 to 2, 2 to 3 etc
  //   Index contains the current index of the paginated page
  const [index, setIndex] = useState<number>(1);

  //   Indexes array contains all the present indexes
  let indexes: number[] = [];

  //   Here, we calculate all the index  numbers that are available to us and we put it in indexes array
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    indexes.push(i);
  }

  //   Handles the previous button
  function handlePrev() {
    let i = index;
    i--;
    if (index < 2) {
      setIndex(1);
    } else {
      setIndex(i);
      paginate(index);
    }
  }

  //   Handles the next button
  function handleNext() {
    let i = index;
    i++;
    let temp = indexes.length;
    if (index > indexes.length) {
      setIndex(temp);
    } else {
      setIndex(i);
      paginate(index);
    }
  }

  //   Does a normal click based page change handling
  function handlePaginate(number: number) {
    paginate(number);
    setIndex(number);
  }

  //   Rendering everything out
  function PageButtons() {
    let btnList = indexes.map((item) => (
      <li className="page-item" key={item} onClick={() => handlePaginate(item)}>
        <a className="page-link" href="#">
          {item}
        </a>
      </li>
    ));

    return (
      <ul className="pagination">
        <li className="page-item" onClick={() => handlePrev()}>
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {btnList}
        <li className="page-item" onClick={() => handleNext()}>
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    );
  }

  //   Final product
  return (
    <nav aria-label="Page navigation example">
      <PageButtons />
    </nav>
  );
}
