import { data } from "./data.js";
import React, { useState } from "react";
export default function List() {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <h1>Contact Keeper</h1>
      <form>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="input"
          placeholder="search contact"
          className="searchField"
        ></input>
      </form>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.first_name.toLocaleLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
