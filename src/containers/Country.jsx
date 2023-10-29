import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const SingleCountry = () => {
  const [singleCountry, setSingleCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountry = async () => {
      const countryResponse =
        await fetch(`https://restcountries.com/v3.1/name/${name}
      `);
      const data = await countryResponse.json();
      setSingleCountry(data);
      setIsLoading(false);
    };
    fetchCountry();
  }, [name]);
  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen font-semibold tracking-[0.2rem] text-xl">
          Loading...
        </h1>
      ) : (
        <section className="relative w-full h-screen grid justify-center items-start bg-white  dark:bg-[#202d36] text-black dark:text-white ">
          <Link to="/countries">
            <button className="bg-white dark:bg-[#202d36] px-7 py-1 flex items-center gap-3 absolute top-[9rem] left-[2rem] shadow-lg">
              <HiOutlineArrowNarrowLeft className="w-6 h-6" />
              Back
            </button>
          </Link>
          {
            <div className="pt-[14rem] lg:pt-0 lg:px-[4rem] px-[2rem]">
              {singleCountry.map((country) => (
                <div key={country.population} className="lg:flex items-center">
                  <div className="lg:pr-12">
                    <img
                      src={country.flags.svg}
                      className="w-96 md:w-[25rem] lg:min-w-[35rem] xl:w-[40rem] xl:h-96"
                      alt={`${country.name.official} flag`}
                    />
                  </div>
                  <div className=" flex flex-col gap-11">
                    <div className="xl:grid xl:grid-cols-2 grid gap-11 items-center">
                      <div>
                        <h1 className="text-xl font-bold pt-8 pb-5">
                          {country.name.official}
                        </h1>
                        <ul className="text-lg grid gap-3">
                          <li>
                            <span className="font-semibold">Native Name </span>{' '}
                            :{' '}
                            {Object.keys(country.name.nativeName).map(
                              (key, index) => (
                                <span key={index}>
                                  {country.name.nativeName[key].common}
                                  {index <
                                  Object.keys(country.name.nativeName).length -
                                    1
                                    ? ' / '
                                    : ''}
                                </span>
                              ),
                            )}
                          </li>
                          <li>
                            <span className="font-semibold"> Population</span> :{' '}
                            {country.population.toLocaleString()}
                          </li>
                          <li>
                            <span className="font-semibold">Region</span> :{' '}
                            {country.region}
                          </li>
                          <li>
                            <span className="font-semibold">Sub Region</span> :{' '}
                            {country.subregion}
                          </li>
                          <li>
                            <span className="font-semibold">Capital</span> :{' '}
                            {country.capital}
                          </li>
                        </ul>
                      </div>
                      <div className="text-lg ">
                        <ul className="grid gap-3">
                          <li>
                            {' '}
                            <span className="font-semibold">
                              Top Level Domain
                            </span>{' '}
                            : {country.tld}
                          </li>
                          <li>
                            <span className="font-semibold">Currencies</span> :{' '}
                            {Object.keys(country.currencies).map(
                              (key, index) => (
                                <span key={index}>
                                  {country.currencies[key].name}
                                  {index <
                                  Object.keys(country.currencies).length - 1
                                    ? ' / '
                                    : ''}
                                </span>
                              ),
                            )}
                          </li>
                          <li>
                            <span className="font-semibold">Languages</span> :{' '}
                            {Object.keys(country.languages).map(
                              (key, index) => (
                                <span key={index}>
                                  {country.languages[key]}
                                  {index <
                                  Object.keys(country.languages).length - 1
                                    ? ', '
                                    : ''}
                                </span>
                              ),
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-semibold pb-4">Border Countries :</h2>
                      {Object.keys(country.borders).map((key, index) => (
                        <button
                          key={index}
                          className="mr-3 py-2 px-6 mb-3 bg-white dark:bg-[#202d36] shadow-lg"
                        >
                          {country.borders[key]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </section>
      )}
    </>
  );
};

export default SingleCountry;
