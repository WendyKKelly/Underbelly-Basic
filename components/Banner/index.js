import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';
import Link from '../Link';
import Button from '../Button';
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
                <Heading as="h1" content="Your safe space to breathe." />
                <Heading as="h2" content="" />
                <Subscribe>
                  <Heading
                    as="h2"
                    content="The Underbelly is a project that helps us become better humans."
                  />

                  <Link href="/bpage/about" passHref>
                    <Button title="BEGIN" />
                  </Link>
                  <Heading as="h3" content="" />

                  <Text className="banner-caption" content="" />
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
