import React from 'react';

import Text from '../Text';
import Link from '../Link';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './intronews.style';

const IntroNews = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="me">
            <BannerContent>
              <Heading
                className="head"
                as="h1"
                content="Wendy Kelly's Underbelly"
              />

              <Text
                className="banner-caption"
                content="How do you go from unloveable to loved? From burned out to deeply connected to the world around you? From wounded and wounding to caring for yourself and others? Curious? Explore my 'delightful', 'always inspiring' and 'delicious' offerings in the daughter project to Underbelly, 'Wild and Precious' 
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

export default IntroNews;
