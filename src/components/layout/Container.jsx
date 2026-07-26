import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-16 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
