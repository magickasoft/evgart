import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';

import {Clients, Intro, Meta, Services, TechStacks, WorkWithUs} from '../components';

type Props = {
  // Add custom props here
};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta />
      <Intro />
      <Services />
      <TechStacks />
      <WorkWithUs />
      <Clients />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
  },
});

export default HomePage;
