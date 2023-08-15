import React, { PureComponent } from 'react';
import './index.scss'
import {withRouter} from 'react-router-dom'
import {dofinishregister} from '@/api'
import { connect } from 'react-redux'

interface PropsType {
    history:any,
    location:any,
    match:any,
    tel:any,
}
interface StateType{
    password:string
    flag:boolean
}

class Pass extends PureComponent<PropsType,StateType> {
    constructor(props:PropsType){
        super(props);
        this.state = {
            password:'',
            flag:true
        }
    }
    //按钮禁用与否
    handleClick(e:any){
        // 按钮的禁用与否
        const rules:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        this.setState({password:e.target.value},()=>{
            if(rules.test(this.state.password || '')){
                this.setState({flag:false});
            }else{
                this.setState({flag:true});
            }
        })
    }
    //注册接口
    async handleBtn(password:string){
        var tel = this.props.tel
        console.log(tel);
        var res = await dofinishregister({tel,password});
        if(res.data.code == 200){
            this.props.history.push('/login')
        }else{
            console.log('注册失败');
        }
    }
    render() {
        return (
            <div className='pass'>
               <div className="form">
                    <input type="text"  name='phone' placeholder='请设置至少6位登录密码' value={this.state.password} onChange={(e)=>{this.handleClick(e)}}/>
                    <input type="submit" disabled={this.state.flag}  value="下一步" className={`btn ${this.state.flag?'flag':''}`} onClick={()=>{this.handleBtn(this.state.password)}}/>
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
)(withRouter(Pass));