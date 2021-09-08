import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
const Navbar = ({ setSearch, search }) => {
  return (
    <div className="p-3 bg-blue-800 flex justify-between shadow-lg">
      <div className="flex w-full items-center">
        <Image src="/rccg.png" width={40} height={40} alt="RCCG LOGO" />
        <h1 className="mx-2 text-xl text-white font-semibold">
          RCCG LP8 Parishes
        </h1>
      </div>
      <div>
        <form className="flex w-full sm:w-60 my-3 sm:my-0">
          <input
            className="placeholder-white rounded-l-lg  px-3 py-2 w-full border-t mr-0 border-b border-l text-white text-sm border-blue-800 bg-blue-700 focus:outline-none"
            placeholder="Search"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled className="px-3 rounded-r-lg bg-gray-700  text-gray-800 font-bold py-2 uppercase border-blue-800 border-t border-b border-r focus:outline-none">
            <SearchIcon className="h-6 w-6 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
