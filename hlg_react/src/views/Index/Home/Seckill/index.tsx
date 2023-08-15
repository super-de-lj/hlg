import './index.scss'
import React, { PureComponent } from 'react';
import {pro_seckilllist} from '@/api/index'
import {withRouter} from 'react-router-dom'
import CountDown from  '@/components/CountDown'

type propsType = {
    history:any,
    location:any,
    match:any,
}
type stateType = {
    data:[],
    timerDate:any
}

class Seckill extends PureComponent<propsType,stateType> {
    constructor(props:propsType){
        super(props);
        this.state = {
            data:[],
            timerDate:[]
        }
    }
    timer:any = null
    async componentDidMount(){
        var res = await pro_seckilllist();
        this.setState({data:res.data.data})
    }
    render() {
        return (
            <div className='seckill'>
                <div className="top">
                    <div className="left">
                        <span>欢乐购秒杀</span>
                        <span>8点场</span>
                        <div className="timer">
                        <CountDown></CountDown>
                        </div>
                    </div>
                    <div className="right">爆款轮番秒</div>
                </div>
                <div className="bottom">
                    {this.state.data.map((item:any,index)=>{
                        return(
                            <div className="item" key={index} onClick={()=>{this.props.history.push({pathname:'/detail',state:{proid:item.proid}})}}>
                                <img src={item.img1} alt="" />
                                <div className="text">￥{item.originprice}</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Seckill);