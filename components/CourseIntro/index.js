import React from 'react';

import Text from '../Text';
import Link from '../Link';

import Heading from '../Heading';

import Container from '../UI/ContainerTwo';
import Section, { ContentWrapper, BannerContent } from './course.style';

const CourseIntro = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="me">
            <BannerContent>
              <Heading className="head" as="h1" content="Just Start —" />

              <Text
                className="banner-caption"
                content="Meet yourself where you are. After a free course in self care, you'll have a tool kit designed around the best care and feeding of you. With daily practice, you become stronger, more flexible, ready for whatever comes at you in this wild and precious life. 
                "
              />

              <Link href="blog/bpage/courses" passHref>
                <a>
                  <div className="wp">
                    <span className="w">Let's Do This!</span>
                  </div>
                </a>
              </Link>
            </BannerContent>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default CourseIntro;
