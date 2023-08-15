import './index.scss'
import React, { PureComponent } from 'react';
import { Route,withRouter } from 'react-router-dom';
import {TabBar} from 'antd-mobile'
import {AppOutline,UnorderedListOutline,MessageFill,MessageOutline,UserOutline} from 'antd-mobile-icons'

interface PropsType {
    history:any,
    location:any,
    match:any,
}
interface StateType {
    tabs:any[]
}

class Tabbar extends PureComponent<PropsType,StateType>{
    constructor(prop:PropsType){
        super(prop)
        this.state = {
            tabs:[
                {
                  key: '/index/home',
                  title: '首页',
                  icon: <AppOutline />,
                },
                {
                  key: '/index/type',
                  title: '分类',
                  icon: <UnorderedListOutline />,
                },
                {
                  key: '/index/gwc',
                  title: '购物车',
                  icon: (active: boolean) =>
                    active ? <MessageFill /> : <MessageOutline />,
                },
                {
                  key: '/index/user',
                  title: '我的',
                  icon: <UserOutline />,
                },
              ]
        }
    }
    handleChange(key:string){
        this.props.history.push(key);
    }
    render() {
        return (
            <TabBar className='tabbar' onChange={(key)=>{this.handleChange(key)}}>
                {
                    this.state.tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))
                }
          </TabBar>
        );
    }
}

export default withRouter(Tabbar);