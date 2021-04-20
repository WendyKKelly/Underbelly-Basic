import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';
import Link from '../Link';
import Button from '../Button';
import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './explain.style';

const Explain = () => {
  return (
    <Section>
      <Container>
        <Zoom>
          <ContentWrapper>
            <BannerContent>
              <Heading
                className="head"
                as="h1"
                content="Wendy Kelly's Underbelly"
              />

              <Text
                className="banner-caption"
                content="How do you go from unloveable to loved? From burned out to deeply connected to the world around you? From wounded and wounding to caring for yourself and others? Curious? Explore my 'delightful', 'always inspiring' and 'delicious' offerings in the daughter project to The Underbelly, 'Wild and Precious' 
                "
              />

              <Link href="/wild-and-precious" passHref>
                <div className="wp">
                  <span className="w">Wild </span>
                  <span
                    style={{
                      fontFamily: 'Playfair Display',
                      fontWeight: '900',
                      fontSize: '4rem',
                    }}
                  >
                    + Precious
                  </span>
                </div>
              </Link>
            </BannerContent>
          </ContentWrapper>
        </Zoom>
      </Container>
    </Section>
  );
};

export default Explain;
