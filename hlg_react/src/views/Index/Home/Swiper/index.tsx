import './index.scss'
import React, { PureComponent } from 'react';
import * as service from '@/api/index';
import MySwiper from '@/components/MySwiper'


type propsType = {}
type stateType = {
    data:any
}

class Swiper extends PureComponent<propsType,stateType>  {
    constructor(props:propsType){
        super(props);
        this.state = {
            data:[]
        };   
    }
    async componentDidMount (){
        let res = await service.banner_list();
        this.setState({data:res.data.data})
    }
    render() {
        return (
            <div className='swiper'>
                <MySwiper swiperData={this.state.data} height={160} keyname='link'></MySwiper>
            </div>
        );
    }
}

export default Swiper;