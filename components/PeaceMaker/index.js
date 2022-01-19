import React from 'react';

import Text from '../Text';
import Link from '../Link';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './peacemaker.style';

const PeaceMaker = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="">
            <BannerContent>
              <Link href="/wild-and-precious" passHref>
                <a>
                  <div className="wp">
                    <span className="w">Wild </span>
                    <span
                      style={{
                        fontFamily: 'Playfair Display',
                        fontWeight: '900',
                        fontSize: '4rem',
                      }}
                    >
                      + Precious
                    </span>
                  </div>
                </a>
              </Link>
              <Text
                className="banner-caption"
                content="You are wild and precious. Your life — this life you're in the midst of — is your one wild and precious life. Mary Oliver's poem The Summer Day asks What is it you plan to do with your one wild and precious life? Let's attempt to answer her, shall we? 
                "
              />
            </BannerContent>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default PeaceMaker;
