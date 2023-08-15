import React, { PureComponent } from 'react';
import TopNav from '@/components/TopNav'
import {detail} from '@/api'
import './index.scss'
import {cart_add} from '@/api'
import MySwiper from '@/components/MySwiper'
import {Button,Toast,Skeleton} from 'antd-mobile'
import {GiftOutline} from 'antd-mobile-icons'
import { connect } from 'react-redux'

type propsType= {
    history:any,
    location:any,
    match:any,
    userid:string,
}
type stateType= {
    data:any,
    swiperData:any
}
class Detail extends PureComponent<propsType,stateType> {
     constructor(props:propsType){
        super(props)
        this.state = {
            data:[],
            swiperData:[]
        }
    } 
    async componentDidMount(){
        var res = await detail(this.props.location.state);
        if(res.data.code == 200){
            var arr = res.data.data.banners[0].split(',');
            this.setState({swiperData:arr,data:res.data.data})
        } 
    }
    async addGwc(){
        var userid = this.props.userid;
        var proid = this.state.data.proid;
        var num = 1;
        var res = await cart_add({userid,proid,num})
        if(res.data.code == 200){
            Toast.show({
                icon: 'success',
                content: '加入购物车成功',
            })
        }
    }
    render() {
        return (
            <div className='detail'>
                <TopNav title='商品详情' flag/>
                <div className="detail-swiper">
                    <MySwiper swiperData={this.state.swiperData} height={300} flag={true}></MySwiper>
                </div>
               <div className="proinfo">
                    <div className="name">
                        <span>嗨购超市</span>
                        <div className="text"> {this.state.data.proname}</div>
                    </div>
                    <div className="price_sales">
                        <div className="price">价格：<span>￥{this.state.data.originprice}</span></div>
                        <div className="sales">销量：<span>￥{this.state.data.sales}</span></div>
                    </div>
               </div>
                <div className="detail-bar">
                    <div className="bdetail-btn"><GiftOutline fontSize={28}/><span>客服</span></div>
                    <div className="bdetail-btn" onClick={()=>{this.props.history.push('/index/gwc')}}><GiftOutline fontSize={28}/><span>购物车</span></div>
                    <div className="bdetail-btn"><GiftOutline fontSize={28}/><span>店铺</span></div>
                    <Button className='add-gwc' onClick={() =>{this.addGwc()}}>加入购物车</Button>
                </div>
            </div>
        );
    }
}

export default connect(
    (state:any)=>{
        return {
            userid:state.userid
        }
    },
    (dispatch)=>{
        return {}
    }
)(Detail);