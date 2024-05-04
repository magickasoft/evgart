import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {minDevice} from '../../styles';
import {LinkProps, LinksProps} from './footer.d';
import {SocialLink} from './footer.sc';

const Container = SC.div`
  display: flex;
  flex-wrap: wrap;
  @media ${minDevice.tablet} {
    margin-left: auto;
  }
`;

/**
 * Renders a list of social links with translated labels.
 *
 * @param {LinksProps} props - The props for the Links component.
 * @param {LinkProps[]} props.list - The list of social links to render.
 * @param {React.CSSProperties} [props.style] - The style object for the container.
 * @returns {JSX.Element} - The rendered Links component.
 */
export const Links = ({list = [], ...props}: LinksProps): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Container {...props}>
      {list.map(({label, ...restProps}: LinkProps) => (
        <SocialLink key={label} {...restProps}>
          {t(label)}
        </SocialLink>
      ))}
    </Container>
  );
};
