import React, { useState } from "react";
import "./SearchBar.style.css";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { searchQuery } from "../../api/api";
import { useAppContext } from "../../context/App.context";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchLists] = useState<string[] | null>(null);

  const { setList } = useAppContext();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
    searchQuery(e.target.value, setSearchLists);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === "Enter") {
      const data = await searchQuery(searchValue, setSearchLists);
      setList(data);
      setSearchLists(null);
    }
  };

  const onClickListItem = async (value: string) => {
    console.log(value);
    setSearchValue(value);
    const data = await searchQuery(value, setSearchLists);
    console.log(data);
    setList(data);
    setSearchLists(null);
  };

  const onSearchBarCut = ()=>{
    setSearchValue('');
  }

  return (
    <div className="search-bar flex align-center px-2 gap-1 m-auto my-2 mx-auto">
      <BsSearch color="black" size="20"/>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search here..."
        onKeyDown={onKeyDown}
        className="border-none text-inherit"
      />
      <span onClick={onSearchBarCut}>

      <RxCross1  color="black" size="20"/>
      </span>

      <ul className={`search-list list-style-none text-center ${searchList && searchValue? 'py-10': ''}`}>
        {searchList &&
          searchValue &&
          searchList.map((value, index) => {
            return (
              <li key={index} onClick={() => onClickListItem(value)}>
                {value}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
