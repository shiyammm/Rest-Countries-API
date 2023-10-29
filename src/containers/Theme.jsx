import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Theme = () => {
  const [toggle, setToggle] = useState(false);
  const handleTheme = () => {
    document.body.classList.toggle('dark');
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex gap-3 items-center " onClick={handleTheme}>
      <button />
      {toggle ? (
        <FaMoon className="w-5 h-5 dark:text-white" />
      ) : (
        <FaSun className="w-5 h-5 text-black " />
      )}
      <p className="text-lg font-semibold text-black dark:text-white">
        {toggle ? 'Dark Mode' : 'Light Mode'}
      </p>
    </div>
  );
};

export default Theme;
