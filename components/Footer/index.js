import React from 'react';
import Fade from 'react-reveal/Fade';

import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from '../UI/ContainerTwo';
//import Image from '../Image';
import Image from 'next/image';
import Link from '../Link';
import {
  Section,
  FooterTop,
  FooterWidget,
  FooterBottom,
  Copyright,
  FooterNav,
} from './footer.style';
import { data } from '../data';
import Logo from '../../public/image/logo.png';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          {data.footer.map((item) => (
            <Fade key={item.id} up delay={100 * item.id}>
              <FooterWidget key={item.id}>
                <h4>{item.title}</h4>
                <ul>
                  {item.list.map((item) => (
                    <li className="widgetListItem" key={item.id}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </FooterWidget>
            </Fade>
          ))}
        </FooterTop>
        <FooterBottom>
          <Copyright>Copyright &copy; {new Date().getFullYear()}</Copyright>
          <FooterNav>
            {data.footerNav.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="">
                  {item.title} <Icon icon={chevronRight} />
                </Link>{' '}
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
