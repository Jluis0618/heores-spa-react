import React from "react";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";

export const Search = () => {


  const navigate = useNavigate(); // esto es para navegar entre paginas
  const location = useLocation(); // esto es para obtener la ubicacion actual

  const {q=''} = queryString.parse(location.search); // esto es para obtener los parametros de la url
  
  const heroes = getHeroesByName(q)


  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);
  
const {searchText, onInputChange} = useForm({
    searchText: q // esto es para el input
  });


  const onSearchSubmit = (e) => {
    e.preventDefault();

    // // if(searchText.trim().length <= 1){
    //   return;
    // }

    navigate(`?q=${searchText.toLowerCase().trim()}`) // esto es para poner los parametros en la url
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

         {/* {
          (q === '') 
           ?  <div className="alert alert-primary"> Search a Hero</div>
           : (heroes.length === 0) && <div className="alert alert-danger"> Hero not found with <b>{q}</b></div>
         } */}

        <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? "" : "none"}}> Search a Hero</div>
        <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? "" : "none"}}> Hero not found with <b>{q}</b></div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  );
};
