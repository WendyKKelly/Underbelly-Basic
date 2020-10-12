import React from 'react';
import Iframe from 'react-iframe';
import Link from '../Link';
import Text from '../Text';
import Input from '../Input';
import Image from '../Image';
import Button from '../Button';
import Heading from '../Heading';
import Container from '../UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="Learn › Life Skills" />
            <Heading as="h2" content="Master Self Care & Avoid Burnout" />

            <Text
              className="banner-caption"
              content="Learn what your precious self needs to grow strong and healthy. By investing in YOU, by learning to gain emotional strength, you can weather life's storms and actually become stronger from them.  "
            />

            <Subscribe className="substack">
              <Iframe
                className="substack"
                src="https://underbelly.substack.com/embed"
                width="580px"
                height="220"
                frameborder="0"
                scrolling="no"
              />
            </Subscribe>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
