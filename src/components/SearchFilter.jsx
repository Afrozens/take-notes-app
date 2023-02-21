import IconSearch from "../assets/IconSearch.svg";

const SearchFilter = () => {
  return (
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle" >
        <img src={IconSearch} alt="search icon" className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SearchFilter;