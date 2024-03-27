import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import TwitterFeed from '../utils/tweeterFeed';
import LatestVideo from '../utils/latestVideo';

function TabPanel(props) {
   const { value, index, data, tabId, page } = props;
   console.log(page)
   return (
      <div>
         {value === index && (
            <Box>
               {data && data.map((item, i) => (
                  <ListItem key={i}>
                     {
                        (() => {
                           console.log(tabId)
                           switch (tabId) {

                              case 'permaLinks':

                                 return <Card sx={{ width: 700, margin: 'auto' }}>
                                    <CardContent>
                                       <Typography gutterBottom variant="h5" component="div">
                                          <Link href={item.url} target='_blank' underline="none">{item.websiteName}</Link>
                                       </Typography>
                                       <Typography variant="body2" color="text.secondary">
                                          {item.title}
                                       </Typography>
                                    </CardContent>
                                    <CardActions>
                                       <Button size="small">
                                          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(item.url)}`} target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon style={{ color: 'black' }} icon={faXTwitter} />
                                          </a>
                                       </Button>
                                       <Button size="small">
                                          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(item.url)}&title=${encodeURIComponent(item.title)}`} target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faLinkedinIn} />
                                          </a>
                                       </Button>
                                    </CardActions>
                                 </Card>
                              case 'rssList':
                                 return <div>{item.title}</div>;
                              case 'twitter':

                                 return <TwitterFeed
                                    item={item} />

                              case 'youtube':
                                 return <LatestVideo item={item} />
                              case 'podcasts':
                                 return <div>{item.title}</div>;
                              case 'ai':
                                 return <Link href={item.link} target='_blank' underline="none">{item.title}</Link>

                              default:
                                 return null;
                           }
                        })()
                     }
                  </ListItem>
               ))}
            </Box>
         )}
      </div>
   );
}

const initialTabs = [
   { label: 'Liens permanents', id: 'permaLinks' },
   { label: 'RSS', id: 'rssList' },
   { label: 'X', id: 'twitter' },
   { label: 'Youtube', id: 'youtube' },
   { label: 'Podcasts', id: 'podcasts' },
   { label: 'IA', id: 'ai' }
];

export default function MyTabs({ page }) {
   const [value, setValue] = React.useState(0);
   const [data, setData] = useState({});
   const [tabs, setTabs] = useState(initialTabs);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const fetchJsonData = async (id, page) => {
      try {
         const response = await fetch(`/datas/${id}.json`);
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         return data; // return data here
      } catch (error) {
         console.error('There has been a problem with your fetch operation:', error);
      }
   };
   useEffect(() => {
      const fetchData = async () => {
         const updatedTabs = await Promise.all(tabs.map(async (tab) => {
            const data = await fetchJsonData(tab.id, page);
            const filteredData = data.filter(item => item.page === page);
            return { ...tab, data: filteredData };
         }));
         setTabs(updatedTabs);
      };
      fetchData();
   }, []);

   const visibleTabs = tabs.filter(tab => tab.data && Object.keys(tab.data).length > 0);

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
               {visibleTabs.map((tab, index) => (
                  <Tab key={tab.id} label={tab.label} />
               ))}
            </Tabs>
         </Box>
         {visibleTabs.map((tab, index) => (
            <TabPanel value={value} key={tab.id} index={index} data={tab.data} tabId={tab.id} page={page} >
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography>{tab.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        {JSON.stringify(tab.data)}
                     </Typography>
                  </AccordionDetails>
               </Accordion>
            </TabPanel>
         ))}
      </Box>
   );
}