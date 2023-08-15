import './App.scss'
import React, { PureComponent } from 'react';
import RouterView from './route/RouterView';
import routerConfig from './route/routerConfig';


class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <RouterView routes={routerConfig} />
      </div>
    );
  }
}

export default App;