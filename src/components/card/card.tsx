import "./card.css";
import { useState } from "react";
import { ApiData } from "../../interface/ApiData";
import Pagination from "../paginate/paginate";
export default function Card({ data }: { data: ApiData[] }) {
  // Current page is the index of the page where we are right now
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Post per page denotes the number of post a page will have
  const [postPerPage] = useState<number>(10);

  // This is a calculation that we don't have to remember but it is vital for pagination
  // It grabs the first index and last index of the virtual page
  // The produces a slice which is the the thing that we render
  let indexOfLastPost = currentPage * postPerPage;
  let indexOfFirstpost = indexOfLastPost - postPerPage;
  let currentPosts = data.slice(indexOfFirstpost, indexOfLastPost);

  function changePage(pageIndex: number) {
    setCurrentPage(pageIndex);
  }

  function ListRender() {
    let listData = currentPosts.map((item) => (
      <li className="list-group-item" key={item.id}>
        {item.title}
      </li>
    ));
    return <ul className="list-group list-group-flush">{listData}</ul>;
  }

  return (
    <div className="align-sample">
      <div className="card" id="sampleCard">
        <ListRender />
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={data.length}
        paginate={changePage}
      />
    </div>
  );
}
