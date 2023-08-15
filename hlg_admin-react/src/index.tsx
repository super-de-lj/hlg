import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider } from 'react-redux'
import {store , persistor} from '@/store'
{/* <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=T52aN5Zk3xcen8VEcS485TqWsWYmNjaa"></script> */}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
