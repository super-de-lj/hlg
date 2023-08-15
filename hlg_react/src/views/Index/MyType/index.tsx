import './index.scss'
import React, { PureComponent } from 'react';
import TopNav from '@/components/TopNav';
import {pro_categorylist,pro_categorybrandlist} from '@/api/index'
import {PictureOutline} from 'antd-mobile-icons'
import {Skeleton} from 'antd-mobile'
interface propsType {
    history:any,
    location:any,
    match:any,
}
type stateType = {
    typeData:[]
    typeDataIndex:number
    categorybrandlist:[]
}
class MyType extends PureComponent<propsType,stateType> {
    constructor(props:propsType){
        super(props);
        this.state = {
            typeData:[],
            typeDataIndex:0,
            categorybrandlist:[]     
        }
    }
    async componentDidMount(){
        //获取左侧分类
        var res = await pro_categorylist();
        res.data.code == 200 && this.setState({typeData:res.data.data});
        //获取右侧分类品牌
        var res = await pro_categorybrandlist({category:res.data.data[this.state.typeDataIndex]});
        res.data.code == 200 && this.setState({categorybrandlist:res.data.data});
    }
    handleLeftItem(index:number){
        //每次点击获取右侧分类品牌
        this.setState({typeDataIndex:index},async ()=>{
            var res = await pro_categorybrandlist({category:this.state.typeData[this.state.typeDataIndex]});
            res.data.code == 200 && this.setState({categorybrandlist:res.data.data});
        });
    }
    handleRightItem(obj:any){
        this.props.history.push({pathname:'/goodlist',state:obj});
    }
    render() {
        return (
            <div className='mytype'>
                <TopNav title="分类列表" flag={false}/>
                <div className="main">
                    <div className="left">
                        {  
                        this.state.typeData.length <= 0 ?
                        <>
                            <Skeleton.Title animated />
                            <Skeleton.Paragraph lineCount={5} animated />
                        </>
                        :
                        this.state.typeData.map((item,index)=>{
                            return (
                            <div className={`item ${index==this.state.typeDataIndex?'current':''}`} key={index} onClick={()=>{this.handleLeftItem(index)}}>
                               <div className='text'>{item}</div>
                            </div>
                            )
                        })
                        }
                    </div>
                    <div className="right">
                        {
                        this.state.categorybrandlist.length <= 0 ?
                        <>
                            <Skeleton.Title animated />
                            <Skeleton.Paragraph lineCount={15} animated />
                        </>
                        :
                        this.state.categorybrandlist.map((item:{brand:string},index)=>{
                            return (
                                <div className="item" key={index} onClick={()=>{this.handleRightItem({category:this.state.typeData[this.state.typeDataIndex],brand:item.brand})}}>
                                    <PictureOutline fontSize={32}/>
                                    <div className="name">{item.brand}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default MyType;