import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const Hosting = () => (
   <div className='text-color-cont'>
      <h1>Hébergement de vidéos</h1>
      <Tabs page='hosting' />
   </div>
);

Hosting.propTypes = {};

Hosting.defaultProps = {};

export default Hosting;
