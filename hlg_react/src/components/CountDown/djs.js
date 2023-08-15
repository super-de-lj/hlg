//倒计时 返回一个剩余天、时、分、秒的数组
export function daojishi(startTime, endTime) {
    //将剩余天、时、分、秒放入数组中
    var syTime = (endTime - startTime) / 1000;
    //倒计时为零则结束
    if (syTime <= 0) {
        return 0;
    }
    var syDay = parseInt(syTime / 60 / 60 / 24);
    var syHour = parseInt(syTime / 60 / 60 % 24);
    var syMinutes = parseInt(syTime / 60 % 60);
    var sySeconds = parseInt(syTime % 60);

    return [add0(syDay), add0(syHour), add0(syMinutes), add0(sySeconds)];
}
//补零
function add0(num) {
    return num < 10 ? '0' + num : num;
}