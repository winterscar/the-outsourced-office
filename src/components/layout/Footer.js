import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Outsourced Office</h2>
        <p className="mt-5">Giving you the time to do what you do best.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://linkedin.com/company/outsourced-office/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
