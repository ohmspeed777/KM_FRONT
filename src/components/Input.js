import React from 'react';

const Input = ({ className, input, meta, placeholder, type }) => {
  // console.log(props);
  return (
    <input
      className={className}
      {...input}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
