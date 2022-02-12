import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from '../components'
import { Grid } from '../elements';
import { Main, Sign, Detail, Write, Bookmark } from '../page';

function App() {
  return (
    <React.Fragment>
      <Grid padding='10px'>
        <Header />
        <Route path='/' exact component={Main} />
        <Route path='/sign/:form' exact component={Sign} />
        <Route path='/detail/:post_id' exact component={Detail} />
        <Route path='/write' exact component={Write} />
        <Route path='/write/:post_id' exact component={Write} />
        <Route path='/bookmark' exact component={Bookmark} />
      </Grid>
    </React.Fragment>
  );
}

export default App;
