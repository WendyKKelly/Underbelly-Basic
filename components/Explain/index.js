import React from 'react';

import Text from '../Text';
import Link from '../Link';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './explain.style';

const Explain = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="me">
            <BannerContent>
              <Heading className="head" as="h1" content="Welcome" />

              <Text
                className="banner-caption"
                content="How do you go from unloveable to loved? From burned out to deeply connected to the world around you? From wounded and wounding to caring for yourself and others? Curious? So was I! I'm Wendy Kelly, and The Underbelly is my attempt to share what I am learning around becoming a deeply connected, caring person in this world. I created a daughter project called 'Wild and Precious' with offerings created from what I have learned. A weekly newsletter, a podcast, courses, and booklists so far. Explore a bit and see what you find.
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
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Explain;
