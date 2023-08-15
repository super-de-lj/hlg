import React, { Component,Suspense } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom'; 
import './RouterView.scss'
import {DotLoading} from 'antd-mobile'

interface RouteItem {
    path?:string,
    component?:any,
    children?:Array<RouteItem>,
    from?:string,
    to?:string
}

interface propsType{
    routes: Array<RouteItem>
}

class RouterView extends Component<propsType> {
    render() {
        return (
            <Suspense fallback={<div className='loading' style={{color:'#1677ff'}}>loading<DotLoading color='primary' /></div>}>
                <Switch>
                    {this.props.routes.map((item,index)=>{
                        if(item.from){
                             //如果有from属性 渲染重定向路由
                            return <Redirect exact from={item.from} to={item.to || ''} key={index}></Redirect>
                         }else if(item.children){
                             //如果有children属性 用render渲染路由( 对应的组件会通过routes属性传入其内部需要用到的嵌套路由配置表 )
                             return(
                                <Route path={item.path} render={
                                    ()=>{return <item.component routes={item.children}/>}
                                } key={index}/>
                             )
                         }else{
                             //其他情况 用component渲染路由
                            return <Route path={item.path} component={item.component} key={index}></Route>
                         }
                    })}
                </Switch>
            </Suspense>
        );
    }
}

export default RouterView;