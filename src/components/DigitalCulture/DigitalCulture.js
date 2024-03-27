import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const DigitalCulture = () => (
   <div className='orange'>
      <h1>Culture numérique</h1>
      <p>La culture numérique est l'ensemble des connaissances, savoir-faire et compétences qui permettent de comprendre le monde numérique dans lequel nous vivons.</p>
      <Tabs page='digitalCulture' />
   </div>
);

DigitalCulture.propTypes = {};

DigitalCulture.defaultProps = {};

export default DigitalCulture;
