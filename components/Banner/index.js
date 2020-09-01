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
            <Heading
              as="h1"
              content="What if you deeply loved your whole self?"
            />

            <Text
              className="banner-caption"
              content="What would change? What if you had compassion for yourself, held yourself in high regard, cared deeply for yourself? You'd be emotionally stronger, more flexible. Wanna try? Start by subscribing to my Monday Morning newsletter, '10 Wild and Precious Things' — It's a start to your week on sure footing. Simple clear ways to practice loving yourself, loving others, living well."
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
