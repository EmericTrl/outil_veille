import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const Legal = () => (
   <div className='orange'>
      <h1>Informations légales</h1>
      <p>Ce site a été créé pour la démonstration de React.</p>
      <Tabs page='legal' />

   </div>
);

Legal.propTypes = {};

Legal.defaultProps = {};

export default Legal;
