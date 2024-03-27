import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
   const [faqList, setFaqList] = useState([]);

   useEffect(() => {
      const fetchFaqList = async () => {
         const response = await fetch('/datas/faqList.json');
         const data = await response.json();
         console.log(data);
         setFaqList(data);
      };

      fetchFaqList();
   }, []);

   return (
      <div>
         <h1>FAQ</h1>
         <p>Voici les questions les plus fréquemment posées.</p>
         {faqList.map((faq, index) => (
            <Accordion key={index}>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  {faq.title}
               </AccordionSummary>
               <AccordionDetails>
                  <div dangerouslySetInnerHTML={{ __html: faq.content }} />
               </AccordionDetails>
            </Accordion>
         ))}
      </div>
   );
};

Faq.propTypes = {};

Faq.defaultProps = {};

export default Faq;