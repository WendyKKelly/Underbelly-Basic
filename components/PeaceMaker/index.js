import React from 'react';

import Text from '../Text';
import Link from '../Link';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './peacemaker.style';

const PeaceMaker = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="me">
            <BannerContent>
              <Heading
                className="head"
                as="h1"
                content="What is a Peace Maker?"
              />

              <Text
                className="banner-caption"
                content="
                
                Peace Making is not ego driven. 
                Peace Making is God - led (or, more expansively, led from your understanding of a higher power)
                Peace Making is built on trust. 
                Peace Making calls out and addresses conflict by name.
                Peace Making remains curious and open to being wrong - to changing one's mind.
                Peace Making speaks truth to power.
                Peace Making works toward resolution.
                Peace Making is courageous.
                "
              />

              <Link href="/wild-and-precious" passHref>
                <a>
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
                </a>
              </Link>
              <Text
                className="banner-caption"
                content="Wild + Precious is the name for the daughter project that grew from Underbelly. It's a growing collection of resources to get us closer to our truest selves, where connection and flourishing can and do happen. 
                "
              />
            </BannerContent>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default PeaceMaker;
