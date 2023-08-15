import React, { PureComponent } from 'react';
import './index.scss'
import  {docheckphone} from '@/api'
import {withRouter} from 'react-router-dom'
import {Toast} from 'antd-mobile'
import { connect } from 'react-redux'

interface PropsType {
    history:any,
    location:any,
    match:any,
    updateTel:any,
}
interface StateType{
    tel:string
    flag:boolean
}

class Phone extends PureComponent <PropsType,StateType>{
    constructor(props:PropsType){
        super(props)
        this.state = {
            tel:'',
            flag:true
        }
    }
    handleClick(e:any){
        // 按钮的禁用与否
        const rules:RegExp = /^1[3-9]\d{9}/;
        this.setState({tel:e.target.value},()=>{
            if(rules.test(this.state.tel || '')){
                this.setState({flag:false});
            }else{
                this.setState({flag:true});
            }
        })
    }
    async handleBtn(tel:any){
        //如果未注册则下一步
        var res = await docheckphone(tel)
        if(res.data.code == 10005){
            Toast.show({content: '该账号已被注册'})
            console.log(tel,res.data.message);
        }else if(res.data.code == 200){
            this.props.updateTel(tel.tel)
            this.props.history.push('/register/code')
        }
    }
    render() {
        return (
            <div className='phone'>
                <div className="form">
                    <input type="text"  name='phone' placeholder='请输入手机号/账户号/邮箱' value={this.state.tel} onChange={(e)=>{this.handleClick(e)}}/>
                    <input type="submit" disabled={this.state.flag}  value="下一步" className={`btn ${this.state.flag?'flag':''}`} onClick={()=>{this.handleBtn({tel:this.state.tel})}}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state:any)=>{
        return {}
    },
    (dispatch)=>{
        return {
          //修改电话
          updateTel(tel:string){
            dispatch({type:'UPDATE_TEL',payload:tel})
          }
        }
    }
)(withRouter(Phone));