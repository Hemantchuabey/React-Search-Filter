import React, { useState } from "react";
import { Users } from "../Users";

function Search() {
  const [query, setQuery] = useState("");
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
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={searchInputHandler}
      />
      <ul className="list">
        {Users.map((user) => {
          return (
            <li className="listitem" key={user.id}>
              {user.first_name}
            </li>
          );
        })}
        <li className="listitem">John</li>
      </ul>
    </div>
  );
}

export default Search;
