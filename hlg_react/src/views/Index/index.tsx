import './index.scss'
import React, { PureComponent } from 'react';
import RouterView from '@/route/RouterView';
import Tabbar from "@/components/Tabbar";

type propsType = {
    routes:any
}
type stateType = {
    timer:number
}
class Index extends PureComponent<propsType,stateType>{
    constructor(props:propsType){
        super(props);
        this.state = {
            timer:0
        }
    }
    render() {
        return (
            <div className='index'>
                <RouterView routes={this.props.routes}/>
                {/* 底部导航*/}
                <Tabbar />
            </div>
        );
    }
}
export default Index;