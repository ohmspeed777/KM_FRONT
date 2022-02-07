import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUnit } from '../../action';
import Hero from './Hero';
import Section from './Section';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUnit());
  });

  return (
    <React.Fragment>
      <Hero />
      <Section />
    </React.Fragment>
  );
};

export default Homepage;
