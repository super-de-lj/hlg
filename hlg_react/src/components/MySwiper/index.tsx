import './index.scss';
import React, { PureComponent } from 'react';
import { Space, Swiper } from 'antd-mobile'

interface propsType{
    swiperData:[],
    height:number,
    keyname?:string,
    flag?:boolean
}

class MySwiper extends PureComponent<propsType> {
    render() {
        return (
            <Space direction='vertical' block>
                <Swiper defaultIndex={0} style={{ '--height': this.props.height+'px' }} autoplay={true} loop={true}  
                    indicator={(total, current) => (this.props.flag?<div className="customIndicator">{`${current + 1} / ${total}`}</div>:'')}
                >
                {!this.props.swiperData.length && <Swiper.Item>没有图片啦！！！</Swiper.Item> || (this.props.swiperData.map((item,index)=>{
                      return (
                        <Swiper.Item key={index}>
                             <img src={this.props.keyname ? item[this.props.keyname]:item} alt=""/>
                        </Swiper.Item>
                      )
                  }))}
                </Swiper>
            </Space>
        );
    }
}

export default MySwiper;