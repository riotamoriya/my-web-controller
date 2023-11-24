import * as React from "react";

import MainImageFrame from "../components/MainImageFrame";
import Botton from '../components/Button';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { testFunction, functionName } from "../functions/test";

const IndexPage = ({ data }) => {

  const frameImage = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '5vh 0' }}>
      {/* 画像を中央に配置 */}
      <MainImageFrame frameImage={frameImage} imageAlt={"enemy controller"}/>
      {/* ボタンを中央に配置 */}
      <Botton buttonName={functionName} callbackFunction={testFunction} addDescription="">
        {functionName}
      </Botton>
    </main>
  );
};

export default IndexPage;


export const Head = () => (
  <>
    <title>発火コントローラ</title>
    <meta name="description" content="発火コントローラ" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    {/* Open Graph / Facebook */}
    <meta property="og:title" content="発火コントローラ" />
    <meta property="og:description" content="発火コントローラ" />
    <meta property="og:image" content="https://riotamoriya.github.io/inumakirulet/inumaki.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://riotamoriya.github.io/inumakirulet/" />
    {/* Twitter */}
    <meta name="twitter:card" content="発火コントローラ" />
    <meta name="twitter:title" content="発火コントローラ" />
    <meta name="twitter:description" content="発火コントローラ" />
    <meta name="twitter:image" content="https://riotamoriya.github.io/inumakirulet/inumaki.jpg" />
  </>
);


export const query = graphql`
  query {
    file(relativePath: { eq: "favicon.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800, 
          height: 800, 
          layout: CONSTRAINED 
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;