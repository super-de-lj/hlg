import * as echarts from "echarts";
import * as service from "@/api/index";

export const tu1 = async (ele) => {
    var myChart = echarts.init(ele);
    //获取数据
    var res = await service.echarts.admin_simpleData();
    let xdata = [];
    [...res.data.data].forEach((item) => {
        xdata.push(item.x);
    });
    let seriesData = [];
    [...res.data.data].forEach((item) => {
        seriesData.push(item.val);
    });
    // 绘制图表
    myChart.setOption({
        title: {
            text: "周销量统计",
            left: 'center'
        },
        tooltip: {},
        legend: { //图例的设置
            top: 30
        },
        xAxis: {
            data: xdata,
        },
        yAxis: {
        },
        series: [
            {
                name: "销量",
                type: "line",
                data: seriesData,
            },
        ],
    });
}
export const tu2 = async (ele) => {
    var myChart = echarts.init(ele);
    //获取数据
    var res = await service.echarts.admin_kData();
    let xdata = res.data.data.x;
    let ydata = res.data.data.val;

    // // 绘制图表
    myChart.setOption({
        title: {
            text: "年销量统计",
            left: 'center',
        },
        yAxis: {
            splitLine: { //分割线
                lineStyle: {	//分割线样式
                    type: 'dashed' //分割线类型
                },
                show: false, //是否显示分割线
            }
        },
        tooltip: {},
        legend: { //图例的设置
            top: 30
        },
        xAxis: {
            data: xdata,
        },
        series: [
            {
                name: '-1-',
                type: 'line',
                symbol: 'circle', //实心圆点
                symbolSize: 12, //圆点大小
                data: ydata[0]
            },
            {
                name: '-2-',
                type: 'bar',
                barWidth: 20,
                data: ydata[1]
            },
            {
                name: '-3-',
                type: 'line',
                data: ydata[2]
            },
            {
                name: '-4-',
                type: 'bar',
                barWidth: 20,
                data: ydata[3]
            },
        ]
    })
}