import React from 'react';
import Iframe from 'react-iframe';
import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './podcast.style';
import Link from '../Link';
const Podcast = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="wraps">
            <BannerContent>
              <div className="intro">&</div>
              <div className="introsub">
                <Link href="/wild-and-precious-conversations" replace>
                  <a> Wild + Precious Conversations Podcast. </a>
                </Link>{' '}
                New episode drops weekly-ish on Thursdays
              </div>
              <Iframe
                url="https://underbelly.substack.com/embed"
                width="100%"
                height="320px"
                border="1px solid #EEE"
                background="white"
                frameborder="0"
                scrolling="no"
              />
            </BannerContent>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Podcast;
