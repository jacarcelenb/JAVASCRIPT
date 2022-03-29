import React from "react";
import './Search.css'

function Search ({manejarsearchInput =()=>{} , buscar =()=>{}}) {
    return(
        <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onInput={manejarsearchInput}
        />
        <button className="btn btn-outline-primary" type="submit"
        
        onClick ={buscar}>
          Search
        </button>
      </form>
    )
}

export default Search;