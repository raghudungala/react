import React, { useState, useEffect } from "react";
import "../styles/styles.css";

export default function Pagination() {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const numOfPages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(numOfPages + 1).keys()].slice(1);
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const visibleTodod = todos.slice(indexOfFirstTodo, indexOfLastTodo + 1);

  const prevPagehandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPagehandler = () => {
    if (currentPage !== numOfPages) setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <select onChange={(e) => setTodosPerPage(e.target.value)}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <div>
        {visibleTodod.map((items) => {
          return <p key={items.id}>{items.title}</p>;
        })}
        <span onClick={prevPagehandler}>Prev</span>
        <p>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "active" : ""}
            >{`| ${page} |`}</span>
          ))}
        </p>
        <span onClick={nextPagehandler}>Next</span>
      </div>
    </>
  );
}
