import React from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

const Features = ({ setSelected, searchCountry, setSearchCountry }) => {
  const regionList = ['Africa', 'America', 'Europe', 'Oceania', 'Asia'];
  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-[6rem] gap-5 w-full   mt-9  pt-[6rem] bg-gray-50 dark:bg-[#202d36] text-black dark:text-white ">
        <form className="mx-4 relative lg:w-1/2" role="search-field">
          <PiMagnifyingGlassBold className="absolute  top-5 text-gray-400 w-7 h-7 left-4" />
          <input
            type="search"
            placeholder="Search for a country"
            className="w-full py-5 rounded-lg pl-16 outline-none  shadow-lg bg-white dark:bg-[#2b3743]"
            value={searchCountry}
            onChange={handleSearch}
          />
        </form>
        <form className="ml-4" role="select-field">
          <select
            className="bg-white dark:bg-[#2b3743]  w-60 py-3 shadow-md px-6 rounded-lg"
            onChange={handleSelect}
          >
            <option value="">Filter by Region</option>
            {regionList.map((region) => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
};

export default Features;
