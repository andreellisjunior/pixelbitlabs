import React, { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-white text-gray-800'>
      {children}
    </div>
  );
};

export default Button;
