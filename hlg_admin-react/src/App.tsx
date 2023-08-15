import './App.scss';
import { useRoutes } from 'react-router-dom';
import routerConfig from './router/routerConfig';
import {Suspense, useEffect} from 'react'

const App = () => {
    useEffect(() => {
      document.title= '欢乐购后台管理系统';
    }, []); 
  return (
    <div className='app'>
      <Suspense fallback={<div>loading...</div>}>
        {useRoutes(routerConfig)}
      </Suspense>
    </div>
  );
};

export default App;
