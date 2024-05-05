import {useTranslation} from 'next-i18next';
import React from 'react';

import {TechCard} from '../card';
import {CustomSlider} from '../customSlider';
import {responsive, slides} from './constants';
import {Container, Content, H3} from './techstacks.sc';

export const TechStacks = (props: any) => {
  const {t} = useTranslation('common');
  return (
    <Container id="techStacks">
      <Content>
        <H3>{t('HomePage.TechStacks.title')}</H3>
      </Content>
      <CustomSlider responsive={responsive}>
        {slides.map((o, i) => (
          <TechCard key={i} {...o} />
        ))}
      </CustomSlider>
    </Container>
  );
};
