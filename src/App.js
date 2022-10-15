import React, { useEffect, useState } from 'react';
import './App.css';
import { getCatFacts } from './services';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',

  bgcolor: 'background.paper',
};

function App() {

  const [catFacts, setCatFacts] = useState([]);


  useEffect(() => {

    getCatFacts(10).then((catFactsResponse) => {

      setCatFacts(catFactsResponse);

    });

  }, [])


  return (
    <div className="App">

      <List sx={style} component="nav" aria-label="mailbox folders">

        {

          catFacts.map((catFact, index) => {
            return (
              <React.Fragment key={index}>
                <ListItem button>
                  <ListItemText primary={catFact.fact} />
                </ListItem>
                <Divider />
              </React.Fragment>
            )
          })

        }


      </List>

    </div>
  );
}

export default App;
