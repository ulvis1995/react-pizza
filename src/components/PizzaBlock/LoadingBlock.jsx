import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader 
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="128" cy="115" r="115" /> 
      <rect x="1" y="288" rx="6" ry="6" width="280" height="84" /> 
      <rect x="1" y="249" rx="6" ry="6" width="280" height="26" /> 
      <rect x="1" y="384" rx="6" ry="6" width="90" height="32" /> 
      <rect x="136" y="376" rx="20" ry="20" width="144" height="43" />
    </ContentLoader>
  )
}

export default LoadingBlock;