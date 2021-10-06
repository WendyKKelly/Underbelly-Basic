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
          <Link href="/courses" replace>
            <a>
              <div className="me">
                <BannerContent>
                  <Heading className="head" as="h1" content=" Step Two " />

                  <Text
                    className="banner-caption"
                    content="Meet yourself where you are. After a short course in self care, you'll have a tool kit designed around the best care and feeding of you. With daily practice, you become stronger, more flexible, ready for whatever comes at you in this wild and precious life. 
                "
                  />
                </BannerContent>
              </div>
            </a>
          </Link>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default CourseIntro;
