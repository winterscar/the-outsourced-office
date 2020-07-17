import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl uppercase text-primary">
        <div className="w-12 mr-1">
          <LogoIcon />
        </div>
        Outsourced office
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#home">
          home
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          services
        </AnchorLink>
        <AnchorLink className="px-4" href="#about">
          about
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
