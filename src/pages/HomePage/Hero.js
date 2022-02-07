import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1592997571659-0b21ff64313b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
    </div>
  );
};

export default Hero;
