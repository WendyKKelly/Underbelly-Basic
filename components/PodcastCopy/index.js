import React from 'react';
import Iframe from 'react-iframe';
import Text from '../Text';
import Link from '../Link';
import Input from '../Input';
import Image from '../Image';
import Button from '../Button';
import Heading from '../Heading';
import Container from '../UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Podcast,
  SponsoredBy,
  ImageGroup,
} from './podcastcopy.style';

import paypal from '../../public/image/apple.svg';
import stitcher from '../../public/image/stitcher.png';
import spotify from '../../public/image/spotify.svg';
import google from '../../public/image/google.svg';

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
              content="Hi! Welcome to The Underbelly Project's podcast, Wild and Precious Conversations. We explore the weekly theme in a more in-depth way, often with an expert guest, other times just me, expanding on the idea I began the week with in the newsletter, 10 {Wild and Precious} Things. Why a podcast? Well, I have been considering creating a podcast since around 2015. I started listening to Stuff You Should Know back in I think 2010, and the medium took me by surprise. So intimate, so easy to listen to. Wild and Precious Conversations is growing into a podcast that feels like a friendly conversation — which is a lovely way to ponder what it takes to get emotionally stronger. Curious? Listen below, now."
            />

            <Podcast>
              <Iframe
                sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms"
                scrolling="no"
                width="70%"
                height="185"
                frameborder="0"
                src="https://embed.radiopublic.com/e?if=wild-and-precious-conversations-WwygVX"
              />
            </Podcast>

            <SponsoredBy>
              <Text className="sponsoredBy" content="Listen/Subscribe:" />
              <ImageGroup>
                <Image src={paypal} width="10em" alt="Apple" />
                <Image src={stitcher} width="8em" alt="Stitcher" />
                <Image src={google} width="10em" alt="Google" />
                <Image src={spotify} width="10em" alt="Spotify" />
              </ImageGroup>
            </SponsoredBy>
            <Link className="podcast-link" href="/posts/how-to-listen-podcasts">
              <a>
                New to podcasts? Curious? Click to learn more about this super
                fun new radio thing.
              </a>
            </Link>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default PodcastCopy;
