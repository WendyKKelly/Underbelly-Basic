import React from 'react';

import Text from '../Text';
import Link from '../Link';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './explain.style';

const Explain = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="me">
            <BannerContent>
              <Heading className="head" as="h1" content="Underbelly is ..." />

              <Text
                className="banner-caption"
                content="All of us mammals have a soft vulnerable underbelly that we need to protect.
                Humans also have underbellies that hide their most shameful places.To me, the word conjures that most human place in us where we are both our most vulnerable yet authentic selves and also perhaps where we are most ashamed. Our underbelly is, literally, our enteric nervous system, our gut, our second brain.  It's a way in to our deepest, truest most resonant self. It's a portal, if you will, to connection. The question is, how do we access this portal? What witchy elixer might bring us closer to our deep, soft, truth?
                "
              />

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
                content="Wild + Precious is the name for the daughter project that grew from Underbelly. It's a growing collection of resources to get us closer to our truest selves, where connection and flourishing can and do happen. 
                "
              />
            </BannerContent>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Explain;
