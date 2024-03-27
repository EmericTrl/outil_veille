import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const Design = () => (
   <div className='text-color-cont'>
      <h1>Design</h1>
      <p>Voici les informations sur le design.</p>
      <Tabs page='design' />
   </div>
);

Design.propTypes = {};

Design.defaultProps = {};

export default Design;
