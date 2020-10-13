import React from 'react';
import Iframe from 'react-iframe';
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
} from './aboutcopy.style';

const AboutCopy = () => {
  return (
    <Section id="about">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="The Underbelly Project" />

            <Text
              className="banner-caption"
              content="Hi! Welcome to The Underbelly Project. It's a place where you can relax, soften your belly (do you know how to do soft belly meditation?) feel safe, and be a bit vulnerable."
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

export default AboutCopy;
