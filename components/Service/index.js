import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from '../UI/ContainerTwo';
import Link from '../Link';
import BlogPost from '../BlogPost';
import SectionHeading from '../SectionHeading';
import Section, { ServiceWrapper } from './service.style';

import { data } from '../data';

const Service = () => {
  return (
    <Section id="service">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Wild + Precious"
            title="An Underbelly Project"
          />
        </Zoom>
        <ServiceWrapper>
          {data.services.map((service) => (
            <Fade key={service.id} up delay={100 * service.id}>
              <BlogPost
                className="serviceItem"
                thumbUrl={service.icon}
                title={service.title}
                excerpt={service.desc}
                link={
                  <Link href={service.link}>
                    Learn More <Icon icon={chevronRight} />
                  </Link>
                }
              />
            </Fade>
          ))}
        </ServiceWrapper>
      </Container>
    </Section>
  );
};

export default Service;
