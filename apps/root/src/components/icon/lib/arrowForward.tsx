import React from 'react';

export const arrowForward = ({color = '#777777', ...rest}: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" fill={color}/>
  </svg>
);
