import React, { PureComponent } from 'react';
import CartList from "@/views/Index/Home/CartList";
import Recommend from "@/views//Index/Home/Recommend";
import Swiper from "@/views/Index/Home/Swiper";
import Seckill from "@/views/Index/Home/Seckill";
import SearchInput from '@/views/Index/Home/SearchInput';

class Home extends PureComponent {
    render() {
        return (
            <div className='home'>
                {/*顶部导航 */}
                <SearchInput/>
                {/* 轮播图*/}
                <Swiper>{/* <item-Swiper></item-Swiper> */}</Swiper>
                {/* 分类导航*/}
                <CartList/>
                {/* 秒杀列表*/}
                <Seckill/>
                {/* 推荐列表*/}
                <Recommend/>
            </div>
        );
    }
}


export default Home;