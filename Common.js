// offset : time offset
function GetTime(offset)
{
    let nowTime = new Date();
    nowTime.setTime(nowTime.getTime() + offset * 60 * 60 * 1000);
    return nowTime;
}