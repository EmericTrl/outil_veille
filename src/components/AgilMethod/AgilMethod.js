import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';


const AgilMethod = () => (
   <div className='orange'>
      <h1>Méthode Agile</h1>
      <Tabs page='agileMethods' />
   </div>
);

AgilMethod.propTypes = {};

AgilMethod.defaultProps = {};

export default AgilMethod;
