import React from "react";
import './searchbar.css';

function SearchBar() {
  return (


<form className="form-wrapper">
    <input type="text" id="search" placeholder="Search for..." required />
    <input type="submit" value="go" id="submit" />
</form>


  )
};

export default SearchBar;