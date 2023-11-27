import React from "react";
import { useGlobalContext } from "./context.jsx";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (searchValue === "") return;
    setSearchTerm(searchValue);
  };

  return (
    <>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          id=""
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
