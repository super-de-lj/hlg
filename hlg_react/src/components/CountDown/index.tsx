import './index.scss'
import {daojishi} from './djs'
import React, { PureComponent } from 'react';
interface propsType{
    timestamp?:Date
}

class CountDown extends PureComponent<propsType,any> {
    constructor(props:propsType){
        super(props)
        this.state = {
            timerDate : [],
            timestampDefault:this.props.timestamp || new Date().getTime() + 60*60*1000
        }
    }
    timer:any = null
    componentDidMount(): void {
        this.timer = setInterval(()=>{
            this.setState({timerDate:daojishi(new Date(),this.state.timestampDefault)})
        },1000)
    }
    render() {
        return (
            <div className='count-down'>
                <span>{this.state.timerDate[1] || '00'}</span>:<span>{this.state.timerDate[2] || '00'}</span>:<span>{this.state.timerDate[3] || '00'}</span>
            </div>
        );
    }
}

export default CountDown;