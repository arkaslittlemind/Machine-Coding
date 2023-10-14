// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CountryCard from "./components/CountryCard";

const API_URL = "https://restcountries.com/v3.1/name/";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  const debouncedSearch = _.debounce((searchTerm) => {
    fetchCountries(searchTerm);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  const fetchCountries = async (query) => {
    try {
      const response = await axios.get(API_URL + query);
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Country Info</h1>
      <SearchBar handleSearch={setSearchTerm} />
      <div className="country-cards">
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
