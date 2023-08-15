import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
//store持久化存储
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from '@/store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  //使用 BrowserRouter 路由管理组件 包裹根组件 
  <BrowserRouter>
   {/* Provider 负责将 store 传给内层任何一个组件 */}
    <Provider store={store}>
   {/* 用 PersistGate 包裹根组件 App, 在内部组件渲染完成之前 会自动读取持久化存储的数据并保存到 redux 中 */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  //</React.StrictMode>
);

reportWebVitals();
