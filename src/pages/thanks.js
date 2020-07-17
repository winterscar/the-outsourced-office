import React from 'react';
import Success from '../svg/Success'


const Thanks = () => (
  <div className="flex w-full h-screen flex-col items-center justify-center max-w-md mx-auto">
    <Success/>
    <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-none">Thanks</h1>
    <p className="text-xl lg:text-2xl xl:text-3xl leading-none">We'll be in touch shortly!</p>
  </div>
);

export default Thanks;