import * as React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import './style.css';

const MainImageFrame = ({frameImage, imageAlt="frameImg"}) => {
  
  return (
    <div className="character-image-container"> {/* 画像とボタンの間隔を調整 */}
      {frameImage && 
        <GatsbyImage image={frameImage} alt={imageAlt} className="character-image"/>}
    </div>
  );
};


export default MainImageFrame;
