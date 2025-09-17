import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = ({ show }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Find the show by name (case-insensitive)
    const foundShow = show.find((e) =>
      e.name.toLowerCase().includes(query.toLowerCase())
    );

    if (foundShow) {
      navigate(`/show/${foundShow.id}`);
    } else {
      alert("No show found!");
    }
  };

  return (
    <header className="header">
       <div className="logo">Net-Show</div>
      <input
        type="text"
        placeholder="Search show..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </header>
  );
};

export default Header;
