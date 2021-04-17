import React from 'react';
import Heading from '../Heading';
import HGroup from './sectionheading.style';

const SectionHeading2 = ({ text, slogan, ...props }) => {
  return (
    <HGroup {...props}>
      <Heading as="h1" content={slogan} />
      <Heading as="h2" content={text} />
    </HGroup>
  );
};

export default SectionHeading2;
