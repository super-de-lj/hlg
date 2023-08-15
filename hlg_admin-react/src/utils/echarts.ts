
export function draw_echarts_01(data: any, myChart: any) {
    var option = {
        xAxis: {
            data: data.x
        },
        yAxis: {},
        series: [
            {
                type: 'candlestick',
                data: data.val
            }
        ]
    }
    //绘制
    option && myChart.setOption(option);
    return myChart
}

export function draw_echarts_02(data: any, myChart: any) {
    if (!data) return myChart;
    var option = {
        xAxis: {
            data: data.map((item: any) => item.x)
        },
        yAxis: {},
        series: [
            {
                type: 'candlestick',
                data: data.map((item: any) => item.val)
            }
        ]
    }
    //绘制
    option && myChart.setOption(option);
    return myChart
}