import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from '../ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';

import Button from '../Button';
import Logo from '../UIElements/Logo';
import Container from '../UI/ContainerTwo';
import NavbarWrapper, {
  MenuArea,
  MobileMenu,
  NavbarRight,
} from './navbar.style';
import Image from '../Image';
import LogoImage from '../../public/image/logo.png';

import { data } from '../data';

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollItems = [];

  data.navItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleHandleMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <NavbarWrapper className="agencyDigital-navbar navbar">
      <Container>
        <Logo
          href="/"
          logoSrc={LogoImage}
          title="Agency Digital"
          className="main-logo"
        />
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu
            className="menu-items menu-left"
            menuItems={data.navItems}
            offset={-84}
          />
          <NavbarRight>
            <li>
              <Link href="/bpage/wild-and-precious-conversations" replace>
                <a> Podcast </a>
              </Link>
            </li>
            <li>
              <Link href="/stories" replace>
                <a> Newsletter </a>
              </Link>
            </li>
            <li>
              <Link href="/bpage/courses" replace>
                <a> Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/bpage/breathe" replace>
                <a> Breathe </a>
              </Link>
            </li>
            <li>
              <Link href="/bpage/contact" replace>
                <a> Contact </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </NavbarRight>
          {/* end of main menu */}

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon
                  style={{ color: '#02073E' }}
                  className="bar"
                  size={32}
                  icon={androidClose}
                />
              ) : (
                <Fade>
                  <Icon
                    style={{ color: '#02073E' }}
                    className="close"
                    icon={androidMenu}
                    size={32}
                  />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {data.navItems.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleHandleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
            <li>
              <Link href="/bpage/wild-and-precious-conversations" replace>
                <a> Podcast </a>
              </Link>
            </li>
            <li>
              <Link href="/stories" replace>
                <a> Newsletter </a>
              </Link>
            </li>
            <li>
              <Link href="/bpage/courses" replace>
                <a> Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/bpage/breathe" replace>
                <a> Breathe </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/bpage/contact">
                <a>Connect</a>
              </Link>
            </li>
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default NavBar;
