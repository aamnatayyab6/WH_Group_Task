import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-header-color sticky flex items-center justify-center z-20 p-8 top-0">
      <p className="font-light font-serif text-4xl text-white">White Hair Salon</p>
    </header>
  );
};

export default Header;
