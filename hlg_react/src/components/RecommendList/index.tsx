import './index.scss'
import React, { PureComponent } from 'react';
import { InfiniteScroll, List,Skeleton } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {pro_recommendlist} from '@/api/index'

type propsType = {
    history:any,
    location:any,
    match:any,
}
type stateType = {
    data:any,
    count:number,
    hasMore:boolean
}

class RecommendList extends PureComponent<propsType,stateType> {
    constructor(props:propsType){
        super(props)
        this.state = {
            data:[],
            count:0,
            hasMore:true
        }
    }
    loadMore = async()=>{
         let res = await pro_recommendlist({count:this.state.count+1});
         if(res.data.data.length < 12){
            this.setState({
                hasMore:false,
                data:[...this.state.data,...res.data.data],
                count:this.state.count + 1
            })
         }else{
            this.setState({
                data:[...this.state.data,...res.data.data],
                count:this.state.count+1
            })
         }
    }
    render() {
        return (
        <>
            <List className='recommendList'>
            {
                this.state.data.map((item:any, index:number) => (
                    <List.Item key={index}>
                        <div className="item" key={index} onClick={()=>{this.props.history.push({pathname:'/detail',state:{proid:item.proid}})}}>
                            <img src={item.img1} alt="" />
                            <div className="name">{item.desc}</div>
                            <div className="price">￥{item.originprice}</div>
                        </div>
                    </List.Item>
                ))
            }
            </List>
                {
                    this.state.data.length == 0 && <>
                        <Skeleton.Title animated />
                        <Skeleton.Paragraph lineCount={5} animated />
                    </>
                }
            <InfiniteScroll  loadMore={this.loadMore} hasMore={this.state.hasMore} threshold={10}>
                {this.state.hasMore? <span>Loading...</span>:<span>我是有底线的</span>}
            </InfiniteScroll>
        </>
        );
    }
}

export default withRouter(RecommendList);