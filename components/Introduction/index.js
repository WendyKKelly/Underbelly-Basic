import React from 'react';

import Zoom from 'react-reveal/Zoom';

import Container from '../UI/ContainerTwo';
import Link from '../Link';

import SectionHeading2 from '../SectionHeading2';
import Section from './introduction.style';

const Introduction = () => {
  return (
    <Section id="service">
      <div className="img">
        <Container>
          <Zoom>
            <SectionHeading2
              slogan="Breathe. You're almost home."
              text="It's time to meet your own underbelly — your deep, authentic vulnerable self. 
            "
            />
          </Zoom>
        </Container>
      </div>
    </Section>
  );
};

export default Introduction;
