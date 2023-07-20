import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function SearchBar() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for a location..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
}

export default SearchBar;
