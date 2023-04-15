import { Dispatch, FC, SetStateAction } from "react";

interface SearchBoxProps {
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar: FC<SearchBoxProps> = (props) => {
  const { setSearchTerm } = props;

  return (

    <input type="search" 
      onChange={(e) => setSearchTerm(e.target.value.trim().toLowerCase())}
      className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900" 
      placeholder="Search by city or state..." 
    />
  )
}

export default SearchBar;