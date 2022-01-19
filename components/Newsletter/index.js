import React from 'react';
import Container from '../UI/ContainerTwo';
import Section, {
  ContentWrapper,
  //Watch,
  BannerContent,
} from './newsletter.style';
import Link from 'next/link';
const Newsletter = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div className="wraps">
            <BannerContent>
              <div className="intro">— Step One —</div>
              <div className="introsub">
                10 Wild+Precious Things in your inbox each Monday Morning.
              </div>
              <div id="revue-embed">
                <form
                  action="http://newsletter.underbel.li/add_subscriber"
                  method="post"
                  id="revue-form"
                  name="revue-form"
                  target="_blank"
                >
                  <div className="revue-form-group">
                    <input
                      className="revue-form-field"
                      placeholder="First Name:"
                      type="text"
                      name="member[first_name]"
                      id="member_first_name"
                    />
                  </div>
                  <div className="revue-form-group">
                    <input
                      className="revue-form-field"
                      placeholder="Last Name:"
                      type="text"
                      name="member[last_name]"
                      id="member_last_name"
                    />
                  </div>
                  <div className="revue-form-group">
                    <input
                      className="revue-form-field"
                      placeholder="Email:"
                      type="email"
                      name="member[email]"
                      id="member_email"
                    />
                  </div>
                  <div className="revue-form-actions">
                    <input
                      type="submit"
                      value="Sign Me Up"
                      name="member[subscribe]"
                      id="member_submit"
                    />
                  </div>
                  <div className="revue-form-footer">
                    By subscribing, you agree with Revue’s{' '}
                    <a target="_blank" href="https://www.getrevue.co/terms">
                      Terms
                    </a>{' '}
                    and{' '}
                    <a target="_blank" href="https://www.getrevue.co/privacy">
                      Privacy Policy
                    </a>
                  </div>
                </form>
              </div>
            </BannerContent>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Newsletter;
