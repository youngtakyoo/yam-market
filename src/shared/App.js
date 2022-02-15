import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/configureStore';

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/User';
import { actionCreators as postActions } from '../redux/modules/Post';

import { Header } from '../components'
import { Grid } from '../elements';
import { Main, Sign, Detail, Write, Bookmark, Test } from '../page';

function App() {
  const dispatch = useDispatch();
  const is_login = useSelector(state => state.user.is_login);

  const user_info = useSelector(state => state.user.user_info);
  console.log(user_info);

  React.useEffect(()=>{
    if (is_login) {
      dispatch(userActions.logincheckDB());
    }
    dispatch(postActions.setpostDB());

  },[])


  return (
    <React.Fragment>
        <ConnectedRouter history={history}>
          <Grid padding='8px'>
          <Header />
          <Route path='/' exact component={Main} />
            <Route path='/sign/:form' exact component={Sign} />
            <Route path='/detail/:post_id' exact component={Detail} />
            <Route path='/write' exact component={Write} />
            <Route path='/write/:post_id' exact component={Write} />
            <Route path='/bookmark' exact component={Bookmark} />
            <Route path='/test' exact component={Test} />
          </Grid>
        </ConnectedRouter>      
    </React.Fragment>
  );
}

export default App;
