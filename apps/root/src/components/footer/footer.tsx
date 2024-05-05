import {useTranslation} from 'next-i18next';
import React from 'react';

import {links, policyLinks} from './constants';
import {A, Brand, Contacts, Container, Content, Docs, Email} from './footer.sc';
import {NavLinks} from './nav-links';
import {Copyright} from './сopyright';

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
        <Docs list={policyLinks} />
        <NavLinks list={links} />
        <Copyright />
      </Content>
    </Container>
  );
};
