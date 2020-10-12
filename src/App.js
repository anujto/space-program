import React from 'react';
import SpacesXContainer from './spacesX/SpacesXContainer';
import SpaceX from './spacesX/SpaceX';




import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/index';
import './App.css';




const browserHistory = createHistory();

export const history = browserHistory;

const middleware = applyMiddleware(thunk, routerMiddleware(history));
const compose = composeWithDevTools ?
  composeWithDevTools(middleware) : middleware;

export const store = createStore(reducers, compose);


// const App = props => (

//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <div>
//         <Switch>
//           {/* <Route path='/space' render={ routeProps => <SpacesXContainer />} /> */}
//           <Route path='/space' component={SpaceX} />} />

//         </Switch>
//       </div>
//     </ConnectedRouter>

//   </Provider>
// );


const App = props => (

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <SpaceX/>
      </div>
    </ConnectedRouter>

  </Provider>
);

export default App;
