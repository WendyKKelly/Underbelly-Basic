import React from 'react';

import Iframe from 'react-iframe';
import Text from '../Text';

import Heading from '../Heading';
import Container from '../UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
} from './aboutcopy.style';

const AboutCopy = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="Wild + Precious" />{' '}
            <Heading as="h2" content="An Underbelly Project" />
            <Text
              className="banner-caption"
              content="Welcome to the audacious project that is The Underbelly and its daughter, Wild + Precious. The Underbelly is where we learn to love the unloveable. Wild + Precious is how we do it."
            />
            <Text
              className="banner-caption"
              content="The Underbelly is a safe space to provide security, acceptance, and compassion. It's where I work from with clients who want to tell their story better, to find their deepest, most vulnerable and authentic purpose."
            />
            <Text
              className="banner-caption"
              content="Wild + Precious is how you DIY get from stuck, unsafe, and rigid to a place where your best self flows from your loving center — learning and practicing self-compassion, self-care, self-love ideally so that you can then go out into the world and love and serve others."
            />
            <Heading as="h2" content="Why?" />
            <Text
              className="banner-caption"
              content="Awhile back, I began noticing my activist friends get burntout — because they spent all their time taking care of the whole world and not any time taking care of themselves. I also was feeling burntout from a simple lack of meaningful work in my life.  "
            />
            <Text
              className="banner-caption"
              content="
              I decided to jump in and just start, using my education in counseling and my career in writing and teaching to see what I might be able to do to be a little of the change I wanted to see. The Underbelly was born. "
            />
            <Heading as="h2" content="Next Steps" />
            <Text
              className="banner-caption"
              content="Wild + Precious: 10 Things is a sweet and juicy Monday morning newsletter. Sign up and take an easy little step toward more love, more compassion, more safe vulnerabilty and more real authenicity."
            />
            <Text
              className="banner-caption"
              content="Wild + Precious also offers a few self directed courses. Sign up for one and commit a bit deeper to your best care and feeding."
            />
            <Text
              className="banner-caption"
              content="Wild + Precious Conversations is our weekly podcast, available anywhere you listen to podcasts. Around 45 minutes long, they are conversations with experts, friends, and sometimes just me, musing and meandering on topics such as integrity, compassion, persistence, etc. Take a listen and see what you think."
            />
            <Text
              className="banner-caption"
              content="The Underbelly is a more hands on approach to this work. I am available for hire, for one-on-one sessions where we will use my counseling education and life experience to help you listen to your deepest core self. Basically, I take all the education and experience I have in order to slience the noise so you can hear your true signal."
            />
            <Text
              className="banner-caption"
              content="
            The Underbelly principle is simple and based on the one rule of Christian teaching: love God above all else and love your neighbour as yourself.
            First, love God. Love a higher power. Love and understand that there is something bigger than you.
            Second, a feedback loop: Love your neighbour. How much? As much as you love yourself. If you love your neighbour but ignore yourself, no one wins. If you love yourself but ignore your neighbour, same thing. They work in tandem. So we start with you — teaching and practicing how to love yourself. How to put your oxygen mask on first. Your care and feeding. 
            But we don't stop there. From a strong, flexible, well cared for core, you step out and do good for others. That feedback loop works — by serving others, your love for yourself grows. By learning your best care and feeding, you're able to serve others and do meaningful work. "
            />
            <Text
              className="banner-caption"
              content="
            Wild + Precious is my weekly practice, too. I literally do each thing I ask you to do in the Monday morning newsletter. The practices spelled out in my courses are evidence-based in Alderian practices such as 'third wave' cognitive behavioural therapy (acceptance and commitment therapy, for example) and Mindfulness practices. "
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
