import './index.scss';
import React, { PureComponent } from 'react';
import TopNav from '@/components/TopNav';
import {login} from '@/api/index'
import { connect} from 'react-redux'

type propsType= {
    history:any,
    location:any,
    match:any,
    updataUser:any
}

type stateType = {
    loginname?:any,
    password?:string
}

class Login extends PureComponent <propsType,stateType>{
    constructor(props:propsType){
        super(props);
        this.state = {
            loginname:'18329972858',
            password:'Abc123'
        }
    }
    handleClick(event:{target:{name:string,value:string}}){
        this.setState({[event.target.name]:event.target.value});
    }
    async handleBtn(val:{}){
        let res = await login(val);
        if(res.data.code == 200){
            this.props.updataUser(res.data.data.token,res.data.data.userid,this.state.loginname);
            this.props.history.push('/index/home')
        }else{
            console.log('登录失败');
        }
    }
    render() {
        return (
            <div className='login'>
                <TopNav title="登录" flag={true}/>
                <div className="form">
                    <input type="text"  name='loginname' placeholder='请输入手机号/账户号/邮箱' value={this.state.loginname} onChange={(e)=>{this.handleClick(e)}}/>
                    <input type="text" name='password' placeholder='请输入密码' value={this.state.password} onChange={(e)=>{this.handleClick(e)}}/>
                    <input type="submit" value="登录" className='btn' onClick={()=>{this.handleBtn({loginname:this.state.loginname,password:this.state.password})}}/>
                </div>
                <div className='bottom'>
                    <a href="/register">手机快速注册</a>
                </div>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return {
        }
    },
    (dispatch)=>{
        return {
            //修改用户信息
            updataUser(token:any,userid:any,loginname:any){
                dispatch({type:'UPDATE_TOKEN',payload:token})
                dispatch({type:'UPDATE_USERID',payload:userid})
                dispatch({type:'UPDATE_TEL',payload:loginname})
            }
        }
    }
)(Login);