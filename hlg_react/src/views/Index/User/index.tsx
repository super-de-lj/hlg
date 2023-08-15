import './index.scss'
import React, {  PureComponent } from 'react';
import TopNav from '@/components/TopNav';
import {Button,ActionSheet} from 'antd-mobile'
import { withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {PictureOutline} from 'antd-mobile-icons'

interface propsType{
    history:any,
    match:any,
    location:any,
    DeleteAll:any,
    tel:string,
}
interface stateType{
    visible:boolean
}

// @withRouter
class User extends PureComponent<propsType,stateType> {
    constructor(props:propsType){
        super(props);
        this.state = {
            visible:false,
        }
    }
    //点击三点
    setVisible(flag:boolean){
        this.setState({visible:flag})
    }
    handleAction(action:any,index:number){
        if(index == 0){
            this.props.DeleteAll();
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className='user'>
                <TopNav title='我的' flag={false}>
                    <Button onClick={() => this.setVisible(true)}>...</Button>
                    <ActionSheet
                        extra='请选择你要进行的操作'
                        cancelText='取消'
                        closeOnAction
                        onAction={(Action,index)=>{this.handleAction(Action,index)}}
                        visible={this.state.visible}
                        actions={[{text:'退出登录',key:'0'}]}
                        onClose={() => this.setVisible(false)}
                    />
                </TopNav>
                <div className="user-img">
                    <img src="http://180.76.99.14/hg/assets/avatar-b27101e4.jpg" alt="" />
                    <span>{this.props.tel}</span>
                </div>
                <div className="selectItems">
                    <div className="title">我的订单</div>
                    <div className="countent">
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>全部订单</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>待付款</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>待发货</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>待收货</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>待评价</span></div>
                    </div>
                </div>
                <div className="selectItems">
                    <div className="title">工具包</div>
                    <div className="countent">
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>收货地址</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>领劵中心</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>我的快递</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>官方客服</span></div>
                        <div className="item"><div className="icon"><PictureOutline fontSize={32}/></div><span>我的评价</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state:any)=>{
        return {
            tel:state.tel
        }
    },
    (dispatch)=>{
        return {
            //清空用户信息
            DeleteAll(){
                dispatch({type:'DELETE_ALL',payload:''});
            }
        }
    }
)(withRouter(User));