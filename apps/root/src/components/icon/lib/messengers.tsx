import React from 'react';

export const template = ({color, paths = [], ...rest}: any) => (
  <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g fill={color} fillRule="nonzero">
      {paths.map((path: any) => (
        <path key={path} d={path} />
      ))}
    </g>
  </svg>
);
export const whatsApp = (props: any) =>
  template({
    paths: [
      'M32.367 14.888c-8.275 0-15.004 6.726-15.007 14.993a14.956 14.956 0 0 0 2.294 7.98l.356.567-1.515 5.533 5.677-1.488.548.325a14.979 14.979 0 0 0 7.634 2.09h.006c8.268 0 14.997-6.727 15-14.995a14.9 14.9 0 0 0-4.389-10.608 14.898 14.898 0 0 0-10.604-4.397zm8.417 21.34c-.369 1.052-2.138 2.013-2.989 2.142-.763.116-1.728.164-2.789-.179a25.28 25.28 0 0 1-2.524-.949c-4.444-1.95-7.345-6.502-7.566-6.802-.222-.301-1.809-2.443-1.809-4.661 0-2.218 1.144-3.307 1.55-3.759.406-.451.886-.564 1.181-.564.295 0 .591.003.849.016.272.014.637-.105.996.773.37.903 1.255 3.12 1.366 3.346.11.225.185.488.037.79-.148.3-.222.488-.443.75-.222.264-.465.588-.664.79-.222.224-.453.469-.194.92.258.45 1.147 1.926 2.463 3.12 1.692 1.535 3.119 2.011 3.562 2.237.443.226.701.188.96-.113.258-.3 1.106-1.316 1.401-1.766.295-.45.59-.376.997-.226.406.15 2.583 1.24 3.026 1.466.443.226.738.338.849.526.11.188.11 1.09-.259 2.143z',
      'M31 0C13.88 0 0 13.88 0 31c0 17.12 13.88 31 31 31 17.12 0 31-13.88 31-31C62 13.88 48.12 0 31 0zm1.283 47.573h-.007c-3 0-5.948-.75-8.566-2.171l-9.502 2.48 2.543-9.243a17.735 17.735 0 0 1-2.392-8.918c.003-9.836 8.044-17.838 17.924-17.838 4.795.002 9.296 1.86 12.68 5.232 3.384 3.371 5.247 7.853 5.245 12.62-.004 9.836-8.046 17.838-17.925 17.838z',
    ],
    ...props,
  });

export const telegram = (props: any) =>
  template({
    paths: [
      'M31 0C13.88 0 0 13.88 0 31c0 17.12 13.88 31 31 31 17.12 0 31-13.88 31-31C62 13.88 48.12 0 31 0zm16.182 15.235l-6.737 31.207a.91.91 0 0 1-1.372.58l-10.36-6.777-5.449 5.002a.913.913 0 0 1-1.447-.385l-3.548-11.037L8.74 29.97c-.73-.329-.72-1.477.029-1.764l37.193-13.985c.67-.256 1.361.319 1.219 1.013z',
      'M22.966 41.977l.606-5.754 16.807-16.43-20.29 13.325z',
    ],
    ...props,
  });
