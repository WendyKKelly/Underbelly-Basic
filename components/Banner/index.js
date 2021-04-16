import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
} from './banner.style';

const Banner = () => {
  return (
    <Section>
      <Container>
        <Zoom>
          <ContentWrapper>
            <div className="image">
              <BannerContent>
                <Heading as="h1" content="Unloveable => Loved." />
                <Heading as="h2" content="" />

                <Text className="banner-caption" content="" />

                <Subscribe className="substack">
                  <Text
                    className="banner-caption"
                    content="Real love is not a soft skill. Learn how to love, be loved, and create a loving world"
                  />
                </Subscribe>
              </BannerContent>
            </div>
          </ContentWrapper>
        </Zoom>
      </Container>
    </Section>
  );
};

export default Banner;
