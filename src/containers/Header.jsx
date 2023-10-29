import React from 'react';
import Theme from './Theme';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-[#2b3743] top-0 absolute z-10 shadow w-full h-[6rem] px-4 lg:px-[7rem] flex justify-between items-center">
      <h1 className="font-bold text-xl text-black dark:text-white ">
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
};

export default Navbar;
