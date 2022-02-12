import React from 'react';
import Head from 'next/head';
import { Header } from '../Header/';
import styled from 'styled-components';

const LayoutContainer = styled.div`
	max-width: 1400px;
  margin: auto;
  z-index: 1;
  .Content {
    // min-height: 100vh;
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
`;

export const Layout: React.FC = (props) => {
  return (
    <LayoutContainer className='Layout'>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='MV Test Description!' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='MV Test' />
        <meta property='og:description' content='MV Test Description!' />
        <meta property='og:url' content='/' />
        <meta property='og:site_name' content='MV' />
        <title>{props.appTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
			<Header title={props.appTitle} />
      <div className='Content'>{props.children}</div>
    </LayoutContainer>
  );
};
