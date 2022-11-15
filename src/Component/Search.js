import React, { useState } from "react";
import { Users } from "../Users";
import Table from "./Table";

function Search() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  //   filter Logic
  //   console.log(
  //     Users.filter((user) => {
  //       return user.first_name.toLowerCase().includes(query);
  //     })
  //   );
  const searchInputHandler = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={searchInputHandler}
      />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => {
          return (
            <li key={user.id} className="listitem">
              {user.first_name}
            </li>
          );
        })}
        <li className="listitem">John</li>
      </ul> */}

      <Table data={search(Users)} />
    </div>
  );
}

export default Search;
