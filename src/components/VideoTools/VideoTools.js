import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const VideoTools = () => (
   <div className='text-color-cont'>
      <h1>Outils vidéo</h1>
      <p>Voici les outils vidéo.</p>
      <Tabs page='videoTools' />
   </div>
);

VideoTools.propTypes = {};

VideoTools.defaultProps = {};

export default VideoTools;