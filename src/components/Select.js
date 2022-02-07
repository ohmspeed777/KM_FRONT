import React from 'react';

const Select = ({ className, input, meta, placeholder, option }) => {
  const renderOptions = () => {
    return option.map((el, index) => (
      <option key={el.id ? el.id : index}>
        {el.name}
      </option>
    ));
  };

  return (
    <select className={className} {...input}>
      <option disabled="disabled" selected="selected">
        {placeholder}
      </option>
      {renderOptions()}
    </select>
  );
};

export default Select;
