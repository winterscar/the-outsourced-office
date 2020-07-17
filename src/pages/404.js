import React from 'react';
import FourOhFour from '../svg/404'


const PageNotFound = () => (
  <div className="flex w-full h-screen flex-col items-center justify-center max-w-md mx-auto">
    <FourOhFour/>
    <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-none">Uh Oh!</h1>
    <p className="text-xl lg:text-2xl xl:text-3xl leading-none text-center">Looks like that page doesn't exist.</p>
  </div>
);

export default PageNotFound;