import React from 'react';
import { Icon } from 'react-icons-kit';
import {pencil2} from 'react-icons-kit/icomoon/pencil2';

import Container from '../UI/ContainerTwo';
import Text from '../Text';
import Heading from '../Heading';
import Image from '../Image';
import List from '../List';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './checkin.style';
import { data } from '../data/';
import illustration from '../../public/image/checkin.png';

const CheckIn = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section id="learn">
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="Curious about yourself and your personality?"
            />
            <Text content="Getting to know yourself and how you best work and play in this world can be a great way to check-in and begin to learn how to best look after yourself." />
            <ListGroup>
              {data.workHardList.map(item => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <Icon
                      icon={pencil2}
                      size={18}
                      style={{ color: '#8dbb85' }}
                    />
                  }
                />
              ))}
            </ListGroup>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default CheckIn;
