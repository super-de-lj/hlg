import './index.scss'
import React, { PureComponent } from 'react';
import {index_catelist} from '@/api/index'

type propsType = {

}
type stateType = {
    data:[]
}

class CartList extends PureComponent<propsType,stateType> {
    constructor(props:propsType){
        super(props);
        this.state = {
            data:[]
        }
    }
    async componentDidMount(){
       var res = await index_catelist();
       res.data.code == 200 &&  this.setState({data:res.data.data})
    }
    render() {
        return (
            <div className='cartlist'>
                {this.state.data.map((item:any,index)=>{
                    return (<div className='item' key={index}>
                    <img src={item.imgurl} alt="" />
                    <div>{item.title.replace('嗨购','欢乐购')}</div>
                </div>)
                })}
            </div>
        );
    }
}

export default CartList;