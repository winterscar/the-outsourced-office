import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from '../SEO'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
