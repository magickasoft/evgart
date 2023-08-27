import SC from '@emotion/styled';
import React from 'react';
import {Link} from 'react-scroll';

const RSLink = SC.div`
  cursor: pointer;
`;

const defailtProps = {
  activeClass: 'active',
  hashSpy: true,
  spy: true,
  smooth: true,
  duration: 500,
  offset: 50,
};

export const ScrollLink = ({children, ...props}: any) => (
  <RSLink>
    <Link rel="canonical" {...defailtProps} {...props}>
      {children}
    </Link>
  </RSLink>
);
