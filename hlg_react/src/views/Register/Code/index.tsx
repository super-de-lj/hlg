import React, { PureComponent } from 'react';
import './index.scss'
import {dosendmsgcode,docheckcode} from '@/api'
import {withRouter} from 'react-router-dom'
import {Toast} from 'antd-mobile'
import { connect } from 'react-redux'

interface PropsType {
    history:any,
    location:any,
    match:any,
    tel:any,
}
interface StateType{
    telcode:string
    flag:boolean,
}

class Code extends PureComponent <PropsType,StateType>{
    constructor(props:PropsType){
        super(props)
        this.state = {
            telcode:'',
            flag:true,
        }
    }
    handleClick(e:any){
        // 按钮的禁用与否
        const rules:RegExp = /^\d{5}$/;
        this.setState({telcode:e.target.value},()=>{
            if(rules.test(this.state.telcode || '')){
                this.setState({flag:false});
            }else{
                this.setState({flag:true});
            }
        })
    }
    async getCode(){
        //发送验证码
        var tel = this.props.tel;
        var res = await dosendmsgcode({tel});
       if(res.data.code == 200){
            this.setState({telcode:res.data.data});
            this.setState({flag:false});
       }else{
        Toast.show({content: '发送验证码失败'})
       }
    }
    async handleBtn(){
        var tel = this.props.tel;
        //进行验证
        var res = await docheckcode({tel:tel,telcode:this.state.telcode+''});
        if(res.data.code == 10007){
            Toast.show({content: res.data.message})
        }else if(res.data.code == 200){
            this.props.history.push('/register/pass')
        }
    }
    render() {
        return (
            <div className='code'>
                <div className="form">
                    <div className='inputItem'>
                        <input type="text"  name='phone' placeholder='请输入验证码' value={this.state.telcode} onChange={(e)=>{this.handleClick(e)}}/>
                        <div className="getcode" onClick={()=>{this.getCode()}}>发送验证码</div>
                    </div>
                    <input type="submit" disabled={this.state.flag}  value="下一步" className={`btn ${this.state.flag?'flag':''}`} onClick={()=>{this.handleBtn()}}/>
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
        return {}
    }

)(withRouter(Code));