import React from "react";

const SearchBar = ({ searchTitle, onSearch }) => {
  return (
    <div className="note-search">
      <input type="text" onChange={onSearch} placeholder="Cari catatan ..." />
    </div>
  );
};

export default SearchBar;
