import React from 'react';

import Zoom from 'react-reveal/Zoom';

import Container from '../UI/ContainerTwo';
import Link from '../Link';

import SectionHeading2 from '../SectionHeading2';
import Section, {
  ContentWrapper,
  Watch,
  BannerContent,
} from './introduction.style';

const Introduction = () => {
  return (
    <Section id="service">
      <div className="img">
        <Container>
          <ContentWrapper>
            <Zoom>
              <Watch>
                <div className="watch">
                  <div className="watch-face">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              </Watch>
              <BannerContent>
                <SectionHeading2
                  slogan="Stop Fighting With Yourself"
                  text="It's time to make peace with your underbelly — your one wild and precious self. 
            "
                />
              </BannerContent>
            </Zoom>
          </ContentWrapper>
        </Container>
      </div>
    </Section>
  );
};

export default Introduction;
