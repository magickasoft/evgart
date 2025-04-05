import React from 'react';

import {details, docsLinks, links} from './constants';
import {Details} from './details';
import {A, Contacts, Container, Content, Docs, Email} from './footer.sc';
import {NavLinks} from './nav-links';
import {Copyright} from './сopyright';

/**
 * Renders the Footer component with contact information, policy links, navigation links, and social links.
 *
 * @param {any} props - Props for the Footer component
 * @return {JSX.Element} The Footer component JSX
 */
export const Footer = (props: any): JSX.Element => {
  return (
    <Container>
      <Content>
        <Details list={details} />
        <Contacts>
          <Email>
            <A href="mailto:hello@madjoylab.ru">hello@madjoylab.ru</A>
          </Email>
          <A href="tel://+79601195445">+7 960 119 54 45</A>
        </Contacts>
        <Docs list={docsLinks} />
        <NavLinks list={links} />
        <Copyright />
      </Content>
    </Container>
  );
};
