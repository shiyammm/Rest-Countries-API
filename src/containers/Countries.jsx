import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesResponse = await fetch(
        `https://restcountries.com/v3.1/all`,
      );
      const countriesData = await countriesResponse.json();
      setCountries(countriesData);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  // //Filtering by search input

  useEffect(() => {
    const result = countries.filter(
      (country) =>
        (!searchCountry ||
          country.name.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase())) &&
        (!selected || country.region === selected),
    );
    setFilteredCountry(result);
  }, [selected, searchCountry, countries]);

  return (
    <main
      id="#countries"
      className="bg-gray-50 dark:bg-[#202d36] text-black dark:text-white"
    >
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen font-semibold tracking-[0.2rem] text-xl">
          Loading...
        </h1>
      ) : (
        <>
          <Features
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
            setSelected={setSelected}
            selected={selected}
          />
          {searchCountry.length > 0 ? (
            <section className="grid lg:grid-cols-2 xl:grid-cols-3  lg:gap-x-0 2xl:grid-cols-4 gap-14  mt-11 mx-9 justify-center px-[5rem]   ">
              {filteredCountry.map((country, index) => (
                <Link
                  key={index}
                  className="bg-white dark:bg-[#2b3743] w-80 grid  rounded-md overflow-hidden"
                  to={`/${country.name.common}`}
                >
                  <div>
                    <img
                      src={country.flags.svg}
                      alt={country.name.common}
                      className="w-full "
                    />
                  </div>
                  <div className="px-9 py-9 grid gap-5">
                    <h1 className="font-bold text-xl">{country.name.common}</h1>
                    <ul>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide text-lg ">
                          Population
                        </span>{' '}
                        : {country.population.toLocaleString()}
                      </li>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide text-lg ">
                          Region
                        </span>{' '}
                        : {country.region}{' '}
                      </li>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide text-lg ">
                          Capital
                        </span>
                        :{' '}
                        {Array.isArray(country.capital)
                          ? country.capital[0]
                          : 'N/A'}
                      </li>
                    </ul>
                  </div>
                </Link>
              ))}
            </section>
          ) : (
            <section className="grid lg:grid-cols-2 xl:grid-cols-3  lg:gap-x-0 2xl:grid-cols-4 gap-14  mt-11 mx-9 justify-center px-[5rem]   ">
              {filteredCountry.map((country, index) => (
                <Link
                  key={index}
                  className="bg-white dark:bg-[#2b3743] w-80 grid  rounded-md overflow-hidden"
                  to={`/${country.name.common}`}
                >
                  <div>
                    <img
                      src={country.flags.svg}
                      alt={country.name.common}
                      className="w-full "
                    />
                  </div>
                  <div className="px-9 py-9 grid gap-5">
                    <h1 className="font-bold text-xl">{country.name.common}</h1>
                    <ul>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide text-lg ">
                          Population
                        </span>{' '}
                        : {country.population.toLocaleString()}
                      </li>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide text-lg ">
                          Region
                        </span>{' '}
                        : {country.region}{' '}
                      </li>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide text-lg ">
                          Capital
                        </span>
                        :{' '}
                        {Array.isArray(country.capital)
                          ? country.capital[0]
                          : 'N/A'}
                      </li>
                    </ul>
                  </div>
                </Link>
              ))}
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default Countries;
