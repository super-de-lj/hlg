import { useGetEcharts_01,useGetEcharts_02 } from '@/utils/serverFun';
import { useEffect } from 'react';
import './index.scss';

import { draw_echarts_01, draw_echarts_02} from '@/utils/echarts';
import * as echarts from 'echarts'
const Echarts = () => {
    //图一数据
    var {echarts_01}:any = useGetEcharts_01(); 
    var echarts_box:any = null;
    var myChart:any = null;
    useEffect(()=>{
        //获取元素
        echarts_box = document.querySelector('.echarts01_box');
        //初始化
        myChart = echarts.init(echarts_box);
        myChart = draw_echarts_01(echarts_01,myChart);
        //尺寸改变重绘
        var resize = ()=> myChart.resize();
        window.addEventListener('resize',resize) 
        //销毁
        return()=>{
            myChart && myChart.clear();
            if (myChart != null) {
                myChart.dispose()
                myChart = null;
            }
            window.removeEventListener("resize", resize);
        }
    },[echarts_01])

    var {echarts_02} = useGetEcharts_02()
    // useEffect(()=>{
    //     //获取元素
    //     echarts_box = document.querySelector('.echarts02_box');
    //     //初始化
    //     myChart = echarts.init(echarts_box);
    //     myChart = draw_echarts_02(echarts_02,myChart);
    //     //尺寸改变重绘
    //     var resize = ()=> myChart.resize();
    //     window.addEventListener('resize',resize) 
    //     //销毁
    //     return()=>{
    //         myChart && myChart.clear();
    //         if (myChart != null) {
    //             myChart.dispose()
    //             myChart = null;
    //         }
    //         window.removeEventListener("resize", resize);
    //     }
    // },[echarts_02])

    return (
        <div className='echarts'>
            <div className="echarts01_box" style={{width:400,height:400}}></div>
            <div className="echarts02_box" style={{width:400,height:400}}></div>
        </div>
    );
};

export default Echarts;