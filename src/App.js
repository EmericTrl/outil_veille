import React, { useState } from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Faq from './components/Faq/Faq';
import Hosting from './components/Hosting/Hosting';
import VideoTools from './components/VideoTools/VideoTools';
import Design from './components/Design/Design';
import DigitalCulture from './components/DigitalCulture/DigitalCulture';
import AgilMethod from './components/AgilMethod/AgilMethod';
import Legal from './components/Legal/Legal';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [selectedComponent, setSelectedComponent] = useState('Home');

  const components = {
    'Faq': <Faq />,
    'Hosting': <Hosting />,
    'VideoTools': <VideoTools />,
    'Design': <Design />,
    'DigitalCulture': <DigitalCulture />,
    'AgilMethod': <AgilMethod />,
    'Legal': <Legal />,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 className='text-color-cont m-auto'>SYSTÈME DE VEILLE</h1>
      <Drawer variant="permanent" open={true}>
        <List>
          {[
            { text: 'Faq', id: 'Faq' },
            { text: 'Hébergement de Vidéos', id: 'Hosting', bgColor: '#8C53FF' },
            { text: 'Outils de production de Vidéos', id: 'VideoTools', bgColor: '#8C53FF' },
            { text: 'Design', id: 'Design', bgColor: '#8C53FF' },
            { text: 'Culture digitale', id: 'DigitalCulture', bgColor: '#ffa500' },
            { text: 'Méthodes agiles', id: 'AgilMethod', bgColor: '#ffa500' },
            { text: 'RGPD', id: 'Legal', bgColor: '#ffa500' }
          ].map((el) => (
            <ListItem sx={{ bgcolor: el.bgColor }} button key={el.text} onClick={() => setSelectedComponent(el.id)}>
              <ListItemText primary={el.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ margin: 'auto', width: '50%' }}>
        {components[selectedComponent]}
      </div>
    </div>
  );
}

export default App;