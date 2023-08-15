import './index.scss'
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

interface PropsType {
    history:any,
    location:any,
    match:any,
    token:string,
}
type stateType = {
    searchValue :string
}

class SearchInput extends PureComponent<PropsType,stateType>{
    constructor(props:PropsType){
        super(props);
        this.state = {
            searchValue : '',
        }
    }
    changeValue(e:any){
        this.setState({searchValue:e.target.value});
    }
    render() {
        return (
            <div className='search'>
                <div className="left" onClick={()=>{this.props.history.push('/city')}}>北京</div>
                <div className="center">
                    <input type="text" placeholder='请输入搜索关键字' onClick={()=>{this.props.history.push('/search')}}/>
                </div>
                {!this.props.token && <div className="right" onClick={()=>{ this.props.history.push('/login');}}>登录</div>}
                {this.props.token && <div className="right" onClick={()=>{this.props.history.push('/index/user')}}>我的</div>}
            </div>
        );
    }
}

export default connect(
    (state:any)=>{
        return  {token:state.token}
    },
    (dispatch)=>{
        return {}
    }
)(withRouter(SearchInput));