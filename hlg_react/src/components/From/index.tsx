import React, { PureComponent } from 'react';

interface PropsType {
    rules:{}
}
interface StateType {
    tel?:string
    flag:boolean
}

class From extends PureComponent <PropsType,StateType>{
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
    render() {
        return (
            <form className='from'>
                 <input type="text"  name='phone' placeholder='请输入手机号/账户号/邮箱' value={this.state.tel} onChange={(e)=>{this.handleClick(e)}}/>
                <input type="submit" disabled={this.state.flag}  value="下一步" className={`btn ${this.state.flag?'flag':''}`} onClick={()=>{}}/>
            </form>
        );
    }
}

export default From;