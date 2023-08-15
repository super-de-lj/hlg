import React, { PureComponent } from 'react';
import './index.scss'
import TopNav from '@/components/TopNav'
import {pro_categorybrandprolist} from '@/api'
import {Skeleton} from 'antd-mobile'

interface propsType {
    history:any,
    location:any,
    match:any,
}
interface stateType{
    data:any[]
}

class GoodList extends PureComponent <propsType,stateType>{
    constructor(props:propsType){
        super(props);
        this.state = {
            data:[]
        }
    }
    async componentDidMount(){
        var obj = this.props.location.state
        var res = await pro_categorybrandprolist(obj);
        res.data.code==200 &&  this.setState({data:res.data.data})
    }
    render() {
        return (
            <div className='goodlist'>
                  <TopNav title="商品列表" flag/>
                 <div className="countent">
                    {
                    this.state.data.length <= 0 ?
                    <>
                    <Skeleton.Title animated />
                    <Skeleton.Paragraph lineCount={15} animated />
                    </>
                    :
                    this.state.data.map((item:any,index:number)=>{
                        return (<div className="good" key={index} onClick={()=>{this.props.history.push({pathname:'/detail',state:{proid:item.proid}})}}>
                            <img src={item.img1} alt="" />
                            <div className="name">{item.proname}</div>
                            <div className="price">￥{item.originprice}</div>
                        </div>)
                    })
                    }
                 </div>
            </div>
        );
    }
}

export default GoodList;