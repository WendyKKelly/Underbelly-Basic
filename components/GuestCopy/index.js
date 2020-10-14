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
} from './guestcopy.style';

const AboutCopy = () => {
  return (
    <Section id="about">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="Thank You For Jumping Into The Wild & Precious Conversation"
            />

            <Text
              className="banner-caption"
              content="Hi! Welcome. Thank you soooo much for jumping into this conversation. Wild and Precious Conversations is the podcast piece of my project, The Underbelly Project, dedicated to encouraging us all to get emotionally stronger and more flexible.
              
              Why? So we can all grow a bit in our authenticity, weather life's storms better, give a friend (or stranger) a needed hand up, and just generally end up with healthier families, communities and ... world."
            />
            <Heading as="h2" content="How To Prepare For The Conversation" />

            <Text
              className="banner-caption"
              content="Just relax :) really. These conversations are edited so that your best voice and message stands out. I do try not to over prepare...and I do understand how scary that might feel. The feedback I like getting (and consistently get) is that the audience feels like they are a fly on the wall in a conversation between two friends. In that way, we do have a topic to stick to but whatever ends up coming up is where the conversation leads...so far, it has worked.
  If you would like, I can give a bit of structure, so do let me know. Beyond that, simply get comfortable —  you will not be on video at all for the conversation. Try to be in a small room with lots of stuff in it - the stuff will absorb sound am make you sound more natural. As long as you have an okay pair of ear bus with a mic you should be fine - don't worry about that too much. I allow 45 minutes for the conversation with the first maybe 10 minutes for warming up and the last 5 for saying good bye :) Yes, I definitely have gone over in some episodes. This is only with consent — I very much understand how precious your time is.
  Please email me at wendy@underbel.li if you have any questions at all. I currently don't have a paid version of the calendar software, so you won't get a notification before our interview. Last, if you feel comfortable, please consider sharing our episode with your friends and fans. I would be honored. (and, actually, share anything you feel inspired to! Thank you!!"
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

export default AboutCopy;
