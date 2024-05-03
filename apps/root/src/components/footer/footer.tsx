import {useTranslation} from 'next-i18next';
import React from 'react';

import {links, policyLinks, socialLinks} from './constants';
import {LinkProps} from './footer.d';
import {
  A,
  Brand,
  Contacts,
  Container,
  Content,
  Copyright,
  Email,
  Li,
  Nav,
  NavLink,
  Note,
  Policy,
  Social,
  SocialLink,
  Ul,
} from './footer.sc';

/**
 * Renders the Footer component with contact information, policy links, navigation links, and social links.
 *
 * @param {any} props - Props for the Footer component
 * @return {JSX.Element} The Footer component JSX
 */
export const Footer = (props: any): JSX.Element => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <Content>
        <Brand>Шмаков Евгений Сергеевич</Brand>
        <Brand>ИНН: 540863710354</Brand>
        <Brand>Телефон: +7 960 119 54 45</Brand>
        <Brand>Почта: hello@madjoylab.ru</Brand>
        {/* <Brand>ИП Мирошниченко Надежда Александровна</Brand>
        <Brand>ИНН: 366412065886</Brand>
        <Brand>ОГРНИП: 322366800104235</Brand>
        <Brand>Телефон: +7 960 119 54 45</Brand>
        <Brand>Почта: hello@madjoylab.ru</Brand> */}
        <Contacts>
          <Email>
            <A href="mailto:hello@madjoylab.ru">hello@madjoylab.ru</A>
          </Email>
          <A href="tel://+79601195445">+7 960 119 54 45</A>
        </Contacts>
        <Policy>
          {policyLinks.map(({label, ...props}: LinkProps, index) => (
            <SocialLink key={index} {...props}>
              {t(label)}
            </SocialLink>
          ))}
        </Policy>
        <Nav>
          <Ul>
            {links.map(({label, ...props}: LinkProps, index) => (
              <Li key={index}>
                <NavLink>
                  <a {...props}>{t(label)}</a>
                </NavLink>
              </Li>
            ))}
          </Ul>
        </Nav>
        <Note>
          <Copyright>© madjoylab, {new Date().getFullYear()}</Copyright>
          <Social>
            {socialLinks.map(({label, ...props}: LinkProps, index) => (
              <SocialLink key={index} {...props}>
                {t(label)}
              </SocialLink>
            ))}
          </Social>
        </Note>
      </Content>
    </Container>
  );
};
