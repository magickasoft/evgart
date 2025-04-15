import SC from '@emotion/styled';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {Text} from './common';
import {ScrollIndicator} from './scrollIndicator';
import {SearchInput} from './search-input';

const Container = SC.header<{scrolled: boolean}>`
  font-family: ${ibmplexsans400.style.fontFamily};
  background: #ffffff;
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  margin: 0 auto;
  padding: 0 100px;
  transition: border-bottom 0.3s ease;

  @media ${maxDevice.tablet} {
    padding: 0 30px;
    height: 3.5rem;
  }

  border-bottom: ${({scrolled}) => (scrolled ? '1px solid #d0d0d0' : '1px solid #ffffff')};
`;

const LeftBlock = SC.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RightBlock = SC.div`
  display: flex;
  align-items: center;
  gap:20px;
`;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ScrollIndicator />
      <Container scrolled={scrolled}>
        <LeftBlock>
          <Image src="/static/povr-eshka-logo.png" alt="logo" width={60} height={60} />
          <Text>
            <strong>Повар-Ешка</strong>
          </Text>
        </LeftBlock>
        <RightBlock>
          <SearchInput />
        </RightBlock>
      </Container>
    </>
  );
};
