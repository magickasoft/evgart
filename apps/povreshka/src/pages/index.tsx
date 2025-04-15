import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import React from 'react';

import {Clients, Intro, Meta, Services, TechStacks, WorkWithUs} from '../components';
import { MainAdvertis } from '../components/main-advertis';
import { PopularCategories } from '../components/popular-categories';
import {baseStaticProps} from '../helpers/baseStaticProps';

type HomePageProps = {
  // Add custom props here
};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta />
      {/* <Intro /> */}
      {/* <Services /> */}
      <MainAdvertis />
      <PopularCategories />
      {/* <WorkWithUs /> */}
      {/* {/* <Clients /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = baseStaticProps;

export default HomePage;
