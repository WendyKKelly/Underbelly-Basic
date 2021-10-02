import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';
import Link from '../Link';

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
            <div className="wrap">
              <div className="image">
                <BannerContent>
                  <Heading
                    as="h1"
                    content="Make peace with your wild and precious self"
                  />
                  <Heading as="h2" content="" />
                  <Subscribe>
                    <Heading as="h2" content="" />

                    <Heading
                      as="h3"
                      content="So you can live your one wild and precious life"
                    />

                    <Text className="banner-caption" content="" />
                  </Subscribe>
                </BannerContent>
              </div>
            </div>
          </ContentWrapper>
        </Zoom>
      </Container>
    </Section>
  );
};

export default Banner;
