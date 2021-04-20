import React from 'react';
import Text from '../Text';

import Heading from '../Heading';
import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './banner.style';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="A Creative way to grow your Exciting Business ideas"
            />

            <Text
              className="banner-caption"
              content="Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
