import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = axios.get(`http://localhost:5000?q=${query}`);
      setData((await res).data);
    };
    fetchUser();
  }, [query]);

  const searchInputHandler = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={searchInputHandler}
      />

      <Table data={data} />
    </div>
  );
}

export default Search;
