import React, { PureComponent } from 'react';
import './index.scss'
import {hotword,pro_search} from '@/api'
import {SearchOutline,LeftOutline} from 'antd-mobile-icons'

interface propsType {
    history:any,
    location:any,
    match:any,
}
interface stateType{
    data:any[],
    keyword?:string,
    datalist:any[]
}

class Search extends PureComponent <propsType,stateType>{
    constructor(props:propsType){
        super(props)
        this.state = {
            data:[],
            datalist:[],
            keyword:''
        }
    }
    async componentDidMount(){
        var res = await hotword();
        res.data.code == 200 && this.setState({data:res.data.data})
    }
    searchChange(e:{target:{value:string}}){
        this.setState({keyword:e.target.value})
    }
    async handleSearch(){
        var res = await pro_search({keyword:this.state.keyword});
        res.data.code == 200 && this.setState({datalist:res.data.data});
    }
    //按下叉号
    handleDelete(){
        this.setState({datalist:[]});
        this.setState({keyword:''});
    }
    // 按下回车
    handleKeyDown(e:any){
        if(e.keyCode == 13){
            this.searchChange(e);
            this.handleSearch();
        }
    }
    render() {
        return (
            <div className='search-list'>
                <div className="top-search">
                    <div className="left" onClick={()=>{this.props.history.push('/index/home')}}><LeftOutline /></div>
                    <div className="input">
                        <span><SearchOutline fontSize={18}/></span>
                        <input type="text" placeholder='请输入搜索关键字' value={this.state.keyword} onChange={(e)=>{this.searchChange(e)}} onKeyDown={(e)=>{this.handleKeyDown(e)}}/>
                        <button onClick={()=>{this.handleDelete()}}>×</button>
                    </div>
                    <div className="right" onClick={()=>{this.handleSearch()}}>搜索</div>
                </div>
               <div className="countent">
                {!this.state.datalist.length && (<div className="search-list">
                        <div className="title">
                            <div className="left">历史搜索</div>
                            <div className="right">删除</div>
                        </div>
                        <div className="list">
                            {this.state.data.map((item:any,index:number)=>{
                                return (
                                    <div className="list-item" key={index}>
                                        <span>{item.keyword}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)}
                    {!!this.state.datalist.length && (
                        this.state.datalist.map((item:any,index:number)=>{
                            return (
                                <div className="good" key={index} onClick={()=>{this.props.history.push('/detail/'+item.proid)}}>
                                <img src={item.img1} alt="" />
                                <div className="name">{item.proname}</div>
                                <div className="price">￥{item.originprice}</div>
                            </div>
                            )
                        })
                    )}
               </div>
            </div>
        );
    }
}

export default Search;