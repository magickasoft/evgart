import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';

import {Meta, PrivacyPolicy} from '../components';

type Props = {
  // Add custom props here
};

const PrivacyPolicyPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta />
      <PrivacyPolicy />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
  },
});

export default PrivacyPolicyPage;
