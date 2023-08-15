import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss'
import { NavBar } from 'antd-mobile'


interface PropsType {
    title: string,
    history:any,
    location:any,
    match:any,
    children?:any
    flag?:boolean
}

class TopNav extends PureComponent<PropsType> {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <NavBar right={this.props.children} backArrow={this.props.flag} onBack={()=>{this.props.history.go(-1)}}>{this.props.title}</NavBar>
        );
    }
}
export default withRouter(TopNav);