import React, { PureComponent } from 'react';
import TopNav from '@/components/TopNav';
import './index.scss'
import {cart_list,cart_selectone,cart_selectAll,cart_updatenum,cart_removeall} from '@/api'
import {Button,Dialog,Toast} from 'antd-mobile'
import {connect} from 'react-redux'

interface PropsType {
    history:any,
    location:any,
    match:any,
    userid:string
}
interface stateType{
    data:any,
}

class Gwc extends PureComponent<PropsType,stateType> {
    constructor(props:PropsType){
        super(props)
        this.state = {
            data:[],
        }
    }
    //挂载并获取数据
    componentDidMount() {
        this.updata();
    }
    //更新数据
    async updata(){
        Toast.show({
            icon: 'loading',
            content: '加载中',
            duration: 0,
          })
        let userid = this.props.userid
        var res = await cart_list({userid});
        res.data.code == 10020 && this.setState({data:[]})
        res.data.code == 200 && this.setState({data:res.data.data})
        Toast.clear()
    }
    //点击单选
    async handleCheck(obj:{}){
        var res = await cart_selectone(obj)
        res.data.code == 200 && this.updata();
    }
    //点击减号
    async handleJian(obj:{num:number,cartid:string}){
        obj.num = obj.num<=1? 1:--obj.num;
        var res = await cart_updatenum(obj);
        res.data.code == 200 && this.updata();
    }
    //点击加号
    async handleJia(obj:{num:number,cartid:string}){
        obj.num++;
        var res = await cart_updatenum(obj);
        res.data.code == 200 && this.updata();
    }
    //总价
    priceAll(){
        return this.state.data.filter((item:any)=>item.flag).reduce((prev:number,item:any)=> prev+item.originprice * item.num,0);
    }
    //全选
    checkAll(){
        if(!this.state.data.length) return false;//购物车为空则不全选
        return this.state.data.every((item:any)=>item.flag)
    }
    //点击全选
    async handleCheckAll(type:boolean){
        if( this.state.data.length <= 0 ) return
        var res = await cart_selectAll({userid:this.props.userid,type});
        res.data.code == 200 && this.updata();
    }
    //清空购物车
    async deleteCart(){
        if( this.state.data.length <= 0 ) return
        Dialog.confirm({
            content: '是否清空购物车',
        }).then(async (res)=>{
            if(res){
                let res = await cart_removeall({userid:this.props.userid});
                res.data.code == 200 && await this.updata();
                Toast.show({
                    icon: 'success',
                    content: '清空成功',
                    position: 'bottom',
                })
            }
        })    
    }

    //点击提交订单
    goBuy(priceAll:number){
        if( this.state.data.length <= 0 ){
            Dialog.show({
                content: `请先选择商品`,
                closeOnAction: true,
                actions:[
                    { key: '2',text: '确认',}
                ],
                onAction: action => action.key == 2 && this.props.history.push('/index/home') 
            },)
        }else{
            let userid = this.props.userid
            Dialog.show({
                content: `需要支付${priceAll}元`,
                closeOnAction: true,
                actions:[
                    { key: '0',text: '去支付',},
                    { key: '1',text: '取消',}
                ],
                onAction: action => {
                    action.key == 0 && Toast.show({
                        content: '支付成功',
                        //支付成功则清空购物车
                        afterClose: async () => {
                            let res = await cart_removeall({userid});
                            res.data.code == 200 && await this.updata();
                        },
                     })
                }
            })
        }
    }
    render() {
        return (
            <div className='gwc'>
                  <TopNav title='购物车' flag={false}>   
                    <Button className='deleteBtn' block onClick={()=>{this.deleteCart()}}>
                        清空
                    </Button>
                </TopNav>
                  {!this.state.data.length && <div className="no-cart">
                        <img src="" alt="" />
                        <div className='text'>购物车空空如也</div>
                        <Button onClick={()=>{this.props.history.push('/index/home')}} color='primary'>去逛逛</Button>
                    </div>}
                  {
                    !!this.state.data.length && (<div className="gwc-list">
                    {this.state.data.map((item:any,index:number)=>{
                      return (
                         <div className="item" key={index}>
                             <input type="checkbox" name="check" checked={item.flag} onChange={()=>{this.handleCheck({cartid:item.cartid,flag:!item.flag})}}/>
                             <div className="center">
                                 <div className="left">
                                     <img src={item.img1} alt="" />
                                 </div>
                                 <div className="right">
                                     <h4>{item.proname}</h4>
                                     <div className="price">￥{item.originprice}</div>
                                 </div>
                             </div>
                             <div className="btns">
                                 <button onClick={()=>{this.handleJian({cartid:item.cartid,num:item.num})}}>-</button>
                                 <span>{item.num}</span>
                                 <button onClick={()=>{this.handleJia({cartid:item.cartid,num:item.num})}}>+</button>
                             </div>
                         </div>
                      )
                    })}
                   </div>)
                  }
                  <div className="submit-bar">
                    <div className="left">
                            <input type="checkbox" name="checkAll" checked={this.checkAll()} id='all' onChange={()=>{this.handleCheckAll(!this.checkAll())}}/>
                            <label htmlFor="all">全选</label>
                    </div>
                    <div className="right">
                        <div className="price">合计：<span>￥{this.priceAll()}</span></div>
                        <Button className="submit-btn" block onClick={() => {this.goBuy(this.priceAll())}}>提交订单</Button>
                    </div>
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
)(Gwc);