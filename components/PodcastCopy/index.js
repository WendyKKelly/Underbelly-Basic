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
} from './podcastcopy.style';

import paypal from '../../public/image/apple.svg';

const PodcastCopy = () => {
  return (
    <Section id="about">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="Wild and Precious Conversations — The Underbelly Project's Podcast"
            />

            <Text
              className="banner-caption"
              content="Hi! Welcome to The Underbelly Project's podcast, Wild and Precious Conversations. We explore the weekly theme in a more in-depth way, often with an expert guest, other times just me, expanding on the idea I began the week with in the newsletter, 10 {Wild and Precious} Things. Why a podcast? Well, I have been considering creating a podcast since around 2015. I started listening to Stuff You Should Know back in I think 2010, and the medium took me by surprise. So intimate, so easy to listen to. Wild and Precious Conversations is growing into a podcast that feels like a friendly conversation — which is a lovely way to ponder what it takes to get emotionally stronger. "
            />

            <Subscribe>
              <Iframe
                sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms"
                scrolling="no"
                width="100%"
                height="185"
                frameborder="0"
                src="https://embed.radiopublic.com/e?if=wild-and-precious-conversations-WwygVX"
              />
            </Subscribe>
            <SponsoredBy>
              <Text className="sponsoredBy" content="Listen/Subscribe:" />
              <ImageGroup>
                <Image src={paypal} alt="Apple" />
              </ImageGroup>
            </SponsoredBy>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default PodcastCopy;
